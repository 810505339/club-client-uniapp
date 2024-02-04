/* 广播 */


import { baseRequest } from "../base"

/* 分页查询广播 */
export const getRadioList = async (params: any) => {
  const { data } = await baseRequest({
    url: '/operation/broadcast/page',
    method: 'GET',
    data: params
  })

  return data.data
}






