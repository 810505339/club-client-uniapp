import { imgUrl } from '@/utils/config';

const box0 = imgUrl + 'box0.png'
const box1 = imgUrl + 'box1.png'
const box2 = imgUrl + 'box2.png'
const box3 = imgUrl + 'box3.png'
const box4 = imgUrl + 'box4.png'

const btn0 = imgUrl + 'btn0.png'
const btn1 = imgUrl + 'btn1.png'
const btn2 = imgUrl + 'btn2.png'
const btn3 = imgUrl + 'btn3.png'
const btn4 = imgUrl + 'btn4.png'

import { getDashboardList } from '@/api/dashboard'

enum DATATYPE {
  订单 = 'ORDER',
  优惠券 = 'BROADCAST',
  退款 = 'REFUND',
  拼酒局评论 = 'COMMENT',
  广播 = 'BROADCAST'
}



export type IData = {
  id: number;
  color: string;
  box: string;
  btn: string;
  text: string;
  tag: string;
  value: string;
  url: string
  type: DATATYPE
}

export default () => {

  const list = ref<IData[]>([
    { id: 0, color: '#E6A055FF', box: box0, btn: btn0, text: 'dashboard.text1', tag: 'dashboard.tag', value: '0', url: '/pages/dashboard/order', type: DATATYPE.订单 },
    { id: 1, color: '#3ADBCBFF', box: box1, btn: btn1, text: 'dashboard.text2', tag: 'dashboard.tag1', value: '0', url: '/pages/dashboard/fight', type: DATATYPE.拼酒局评论 },
    { id: 2, color: '#FF6035FF', box: box2, btn: btn2, text: 'dashboard.text3', tag: 'dashboard.tag1', value: '0', url: '/pages/dashboard/radio', type: DATATYPE.广播 },
    { id: 3, color: '#759BFFFF', box: box3, btn: btn3, text: 'dashboard.text4', tag: 'dashboard.tag1', value: '0', url: '/pages/dashboard/refund', type: DATATYPE.退款 },
    { id: 4, color: '#FAAD14FF', box: box4, btn: btn4, text: 'dashboard.text5', tag: 'dashboard.tag1', value: '0', url: '/pages/dashboard/coupons', type: DATATYPE.优惠券 },
  ])


  onMounted(async () => {
    const res: any[] = await getDashboardList()
    console.log(res);
    list.value = list.value.map(l => {
      const findItem = res.find(r => r.type == l.type)
      console.log(findItem?.numbers);

      return {
        ...l,
        value: findItem?.numbers
      }
    })
  })

  return {
    list
  }
}
