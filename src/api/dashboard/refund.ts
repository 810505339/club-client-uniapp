/* 退款 */
import { baseRequest } from "../base"


/* 分页查询 */
export const postRefundList = async (params: any) => {
  const { data } = await baseRequest({
    method: 'GET',
    url: '/consumption/refund/page',
    data: params
  })

  return data.data
}


export const refundAudit = async (params: any) => {
  const { data } = await baseRequest({
    method: 'POST',
    url: '/consumption/refund/refundAudit',
    data: {
      ...params,
      refundId: params.id
    }
  }, {
    msg: true
  })

  return data
}
