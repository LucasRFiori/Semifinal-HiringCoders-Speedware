import { json } from 'co-body'

import type { ICOdata } from './types/types'

export async function getTotalPoints(ctx: Context) {
  const {
    clients: { vtexCommerce },
  } = ctx

  const body = await json(ctx.req)

  try {
    if (!body.userEmail) throw new Error('you passed a userEmail?')

    const response: ICOdata[] = await vtexCommerce.searchDocument(
      'CO',
      `&userEmail=${body.userEmail}`
    )

    if (!response[0]) throw new Error('User not found')

    const { id, totalOrdersPrice, userEmail } = response[0]

    ctx.status = 202
    ctx.response.body = {
      id,
      userEmail,
      totalPoints: totalOrdersPrice,
    }
  } catch (err) {
    ctx.response.status = 400
    ctx.body = {
      message: err.message,
    }
  }
}
