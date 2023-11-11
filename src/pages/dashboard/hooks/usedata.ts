import box0 from '@/assets/img/dashboard/box0.png'
import box1 from '@/assets/img/dashboard/box1.png'
import box2 from '@/assets/img/dashboard/box2.png'
import box3 from '@/assets/img/dashboard/box3.png'
import box4 from '@/assets/img/dashboard/box4.png'
import btn0 from '@/assets/img/dashboard/btn0.png'
import btn1 from '@/assets/img/dashboard/btn1.png'
import btn2 from '@/assets/img/dashboard/btn2.png'
import btn3 from '@/assets/img/dashboard/btn3.png'
import btn4 from '@/assets/img/dashboard/btn4.png'


export type IData = {
  id: number;
  color: string;
  box: string;
  btn: string;
  text: string;
  tag: string;
  value: string;
  url: string
}

export default () => {
  const list = ref<IData[]>([
    { id: 0, color: '#E6A055FF', box: box0, btn: btn0, text: 'dashboard.text1', tag: 'dashboard.tag', value: '2534', url: '/pages/dashboard/order' },
    { id: 1, color: '#3ADBCBFF', box: box1, btn: btn1, text: 'dashboard.text2', tag: 'dashboard.tag1', value: '2534', url: '/pages/dashboard/fight' },
    { id: 2, color: '#FF6035FF', box: box2, btn: btn2, text: 'dashboard.text3', tag: 'dashboard.tag1', value: '2534', url: '/pages/dashboard/radio' },
    { id: 3, color: '#759BFFFF', box: box3, btn: btn3, text: 'dashboard.text4', tag: 'dashboard.tag1', value: '2534', url: '/pages/dashboard/refund' },
    { id: 4, color: '#FAAD14FF', box: box4, btn: btn4, text: 'dashboard.text5', tag: 'dashboard.tag1', value: '2534', url: '/pages/dashboard/coupons' },
  ])
  return {
    list
  }
}
