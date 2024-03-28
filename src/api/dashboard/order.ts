/* 订单 */

import { baseRequest } from "../base"

/*分页  */


export const getOrderList = async (params: any) => {
  const { data } = await baseRequest({
    method: 'GET',
    url: '/consumption/orderManage/handle/page',
    data: params
  })

  return data.data
}
