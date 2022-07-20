import { UserInputError } from '@vtex/api'
import { json } from 'co-body'

import type {
  BodyType,
  ICOdata,
  IOrderType,
  MasterDataClientData,
} from './types/types'
import { calculateUserPoints } from './utils'

export async function orderHookEndPoint(ctx: Context) {
  const {
    clients: { vtexCommerce },
  } = ctx

  const body: BodyType = await json(ctx.req)
  const OrderId = body?.OrderId

  try {
    const order: IOrderType = await vtexCommerce.searchUserByOrderId(OrderId)

    const { totals, clientProfileData } = order

    const currentOrderTotal = totals.filter((item) => item.id === 'Items')[0]

    const clientData: MasterDataClientData[] = await vtexCommerce.searchDocument(
      'CL',
      `&userId=${clientProfileData.userProfileId}`
    )

    const COinformations: ICOdata[] = await vtexCommerce.searchDocument(
      'CO',
      `&userEmail=${clientData[0].email}`
    )

    const currentOrderTotalInPoints = calculateUserPoints(
      currentOrderTotal.value
    )

    if (COinformations.length !== 0) {
      await vtexCommerce.updateFieldOnDocument(
        'CO',
        `${COinformations[0]?.id}`,
        {
          totalOrdersPrice:
            currentOrderTotalInPoints +
            Number(COinformations[0].totalOrdersPrice),
        }
      )
    }

    if (COinformations.length === 0) {
      await vtexCommerce.insertDocument('CO', {
        userEmail: clientData[0].email,
        totalOrdersPrice: currentOrderTotalInPoints,
      })
    }

    ctx.body = {
      user: clientData[0].email,
      prevPointsBalance: Number(COinformations[0].totalOrdersPrice),
      newPointsBalance:
        currentOrderTotalInPoints + Number(COinformations[0].totalOrdersPrice),
    }
    ctx.status = 202
  } catch (err) {
    ctx.status = 404
    new UserInputError(`Err:  ${err}`)
  }
}
