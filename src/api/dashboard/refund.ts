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
