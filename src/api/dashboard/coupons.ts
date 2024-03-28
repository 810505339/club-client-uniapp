/* 优惠券 */


import { baseRequest } from "../base"

/* 优惠券审核分页查询*/
export const getCouponList = async (params: any) => {
  const { data } = await baseRequest({
    url: '/operation/coupon/page/couponAudit',
    method: 'GET',
    data: params
  })

  return data.data
}


/* 优惠券审核 */

export const couponAudit = async (params: any) => {
  const { data } = await baseRequest({
    url: '/operation/coupon/couponAudit',
    method: 'PUT',
    data: {
      ...params,
      couponId: params.id
    },
    header: {
      showMsg: 'true'
    }
  }, {
    msg: true
  })

  return data
}

