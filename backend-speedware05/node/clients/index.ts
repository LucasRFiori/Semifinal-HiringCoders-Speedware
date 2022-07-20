import { IOClients } from '@vtex/api'

import Status from './status'
import VtexCommerceClient from './vtexCommerce'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get vtexCommerce() {
    return this.getOrSet('vtexCommerce', VtexCommerceClient)
  }

  public get status() {
    return this.getOrSet('status', Status)
  }
}
