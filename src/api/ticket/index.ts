import { baseRequest } from "../base"

/*门票分页列表*/
export const ticketByList = async (params: any) => {
  const { data } = await baseRequest({
    url: '/consumption/ticketCheck/page',
    data: params,
    method: 'GET',
  })

  return data.data
}

/* 审核门票 */

export const ticketCheck = async (params: any) => {
  const { data } = await baseRequest({
    url: '/consumption/ticketCheck/check',
    data: params,
    method: 'POST',
  })

  return data.data
}


//今日已核销门票

export const todayCheckNumber = async () => {
  const { data } = await baseRequest({
    url: '/consumption/ticketCheck/todayCheckNumber',
    method: 'GET',
  })

  return data.data
}


