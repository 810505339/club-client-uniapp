<template>
  <view class="rounded-3xl h-[340px] bg-[#72AA3D80]  text-[#CAF16CFF] p-6 flex flex-col relative">
    <view class="w-[168px] h-[168px] absolute z-10 right-5 top-10">
      <image :src="cardIcon" />
    </view>
    <view class="text-base font-semibold">订单及流水统计</view>
    <view class="text-xs font-semibold">
      订单总量
      <text class="text-white text-2xl ml-2">{{ data?.orderTotalCount }}</text>
    </view>
    <view class="text-xs font-semibold">流水总计
      <text class="text-white text-2xl ml-2">$ {{ data?.saleTotalAmount }}</text>
    </view>
    <lechart ref="chart" class="flex-auto "></lechart>
  </view>
</template>

<script setup lang="ts">

import lechart from '@/components/lechart/index.vue'
import { useStackedChatOptions } from '@/utils/eCharts/stackedChat';
import useEcharts from '@/utils/eCharts/useEcharts'
import { imgUrl } from '@/utils/config';
const cardIcon = imgUrl + 'card_1.png'
const props = defineProps<{
  data: any
}>();



const { setOption } = useStackedChatOptions()

const echartsOption = computed(() => {

  const orderSale: any[] = props.data?.orderSaleDateVOS
  return {
    xData: orderSale?.map(n => (n.dataDate)),
    yData: [
      { name: '订单', data: orderSale?.map(n => (n.orderCount)) },
      { name: '流水', data: orderSale?.map(n => (n.amount)) }]
  }
})
const option = setOption(echartsOption.value)
const { chart } = useEcharts(option)

</script>
