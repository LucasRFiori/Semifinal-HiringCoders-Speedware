import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class VtexCommerceClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`https://${context.account}.vtexcommercestable.com.br/api`, context, {
      ...options,
      headers: {
        'X-VTEX-Use-Https': context.authToken,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.vtex.ds.v10+json',
        'x-vtex-api-appKey': 'AQUI',
        'x-vtex-api-appToken': 'AQUI',
      },
    })
  }

  public async searchDocument(entity: string, params: string): Promise<any> {
    return this.http.get(`/dataentities/${entity}/search?_fields=_all${params}`)
  }

  public async insertDocument(entity: string, body: any): Promise<any> {
    return this.http.post(`/dataentities/${entity}/documents`, body)
  }

  public async updateDocument(entity: string, body: any): Promise<any> {
    return this.http.put(`/dataentities/${entity}/documents`, body)
  }

  public async updateFieldOnDocument(
    entity: string,
    docId: string,
    body: any
  ): Promise<any> {
    return this.http.patch(`/dataentities/${entity}/documents/${docId}`, body)
  }

  public async searchUserByOrderId(id: string): Promise<any> {
    return this.http.get(`/oms/pvt/orders/${id}`)
  }

  public async deleteDocument(entity: string, id: string): Promise<any> {
    return this.http.delete(`/dataentities/${entity}/documents/${id}`)
  }
}
