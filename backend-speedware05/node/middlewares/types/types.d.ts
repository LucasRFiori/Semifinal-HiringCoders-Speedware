interface BodyRequest {
  Domain: string
  OrderId: string
  State: string
  LastState: string
  LastChange: string
  CurrentChange: string
  Origin: {
    Account: string
    Key: 'vtexappkey-speedware-UFVTGR'
  }
}

export type BodyType = BodyRequest | Record<string, never>

type TotalsType = {
  id: 'Items' | 'Discounts' | 'Shipping' | 'Tax'
  name: string
  value: number
}

type ClientProfileData = {
  userProfileId: string
}

interface IOrderType {
  orderId: string
  totals: TotalsType[]
  clientProfileData: ClientProfileData
}

interface MasterDataClientData {
  id: string
  email: string
}

interface ICOdata {
  id: string
  userEmail: string
  totalOrdersPrice: string
}
