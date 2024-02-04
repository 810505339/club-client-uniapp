/* 瓶酒局评论 */

import { baseRequest } from "../base"

/* 分页 */
export const getWinePartyList = async (params: any) => {
  const { data } = await baseRequest({
    url: '/consumption/wineParty/comment/page',
    method: 'GET',
    data: params
  })

  return data.data
}






