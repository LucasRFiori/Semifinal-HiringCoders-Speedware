import { json } from 'co-body'

import type { ICOdata } from './types/types'

interface IBody {
  targetUser: string
  valueToDiscount: string
}

export async function removePoints(ctx: Context) {
  const {
    clients: { vtexCommerce },
  } = ctx

  const body: IBody = await json(ctx.req)
  const { targetUser, valueToDiscount } = body

  try {
    if (!targetUser) throw new Error('Missing target user.')
    if (!valueToDiscount) {
      throw new Error('Missing value to discount, it can not be zero.')
    }

    const COSearch: ICOdata[] = await vtexCommerce.searchDocument(
      'CO',
      `&userEmail=${targetUser}`
    )

    const { id, userEmail, totalOrdersPrice } = COSearch[0]
    const userPoints = Number(totalOrdersPrice)

    if (userPoints < Number(valueToDiscount)) {
      throw new Error(
        'Amount requested to discount greater than what the customer has'
      )
    }

    if (!userEmail) throw new Error('User email not found.')

    const newPointsBalance = userPoints - Number(valueToDiscount)

    await vtexCommerce.updateFieldOnDocument('CO', id, {
      totalOrdersPrice: newPointsBalance,
    })

    ctx.body = {
      user: userEmail,
      oldPoinsBalance: Number(totalOrdersPrice),
      newPointsBalance,
    }

    ctx.status = 200
  } catch (err) {
    ctx.body = {
      message: `Error: ${err.message}`,
    }
    ctx.status = 400
  }
}
