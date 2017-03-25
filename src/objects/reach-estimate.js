import { AbstractCrudObject } from './../core'

/**
 * Product Set
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/reference/product-set}
 */
export default class ReachEstimate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      currency: 'currency',
      daily_budget: 'daily_budget',
      object_store_url: 'object_store_url',
      optimize_for: 'optimize_for',
      targeting_spec: 'targeting_spec',
      product_count: 'product_count',
      bid_estimations: 'bid_estimations',
      estimate_ready: 'estimate_ready',
      unsupported: 'unsupported',
      users: 'users'
    })
  }

  static getEndpoint () {
    return 'reachestimate'
  }
}
