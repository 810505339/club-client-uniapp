import { baseRequest } from '../base';


//拼酒局数据概况
export type IParams = {
  beginDate: string,
  endDate: string,
  storeId: string
}
export const wineParty = async (params: IParams) => {
  const { data } = await baseRequest({
    url: `/data/dataBoard/wineParty/${params.storeId}`,
    method: 'GET',
    data: params,
  })
  return data.data
}

//订单及流水统计
export const orderSale = async (params: IParams) => {
  const { data } = await baseRequest({
    url: `/data/dataBoard/orderSale/${params.storeId}`,
    method: 'GET',
    data: params,
  })
  return data.data
}
//用户来店方式占比
export const enterStore = async (params: IParams) => {
  const { data } = await baseRequest({
    url: `/data/dataBoard/enterStore/${params.storeId}`,
    method: 'GET',
    data: params,
  })
  return data.data
}

//酒水套餐排行榜
export const drinkMealRanking = async (params: IParams) => {
  const { data } = await baseRequest({
    url: `/data/dataBoard/drinkMealRanking/${params.storeId}`,
    method: 'GET',
    data: params,
  })
  return data.data
}

//用户性别、年龄占比
export const customerAgeGender = async (params: IParams) => {
  const { data } = await baseRequest({
    url: `/data/dataBoard/customerAgeGender/${params.storeId}`,
    method: 'GET',
    data: params,
  })
  return data.data
}
//区域偏好数据
export const areaPreference = async (params: IParams) => {
  const { data } = await baseRequest({
    url: `/data/dataBoard/areaPreference/${params.storeId}`,
    method: 'GET',
    data: params,
  })
  return data.data
}
