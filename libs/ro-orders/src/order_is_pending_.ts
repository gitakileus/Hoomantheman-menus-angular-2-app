import type { Order } from '@menus/shared-order'
import { order_is_cancelled_ } from './order_is_cancelled_.js'
import { order_is_declined_ } from './order_is_declined_.js'
export function order_is_pending_(order:Order):boolean {
  return !order.Is_Accepted && !order_is_cancelled_(order) && !order_is_declined_(order)
}
