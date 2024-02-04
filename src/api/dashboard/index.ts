/* 获取待办事项列表 */

import { baseRequest } from "../base"

export const getDashboardList = async () => {
  const { data } = await baseRequest({
    url: '/data/waitingProcess/getNumbers',
    method: 'GET',
  })

  return data.data
}






