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


/* 广播审核 */

export const broadcastAudit = async (params: any) => {
  const { data } = await baseRequest({
    url: '/operation/broadcast/broadcastAudit',
    method: 'PUT',
    data: params
  })

  return data.data
}

