<template>
  <view class=" rounded-3xl bg-[#3F4FD780] p-6 text-[#D5DFFFFF] flex flex-col relative h-[340px]">
    <view class="w-[168px] h-[168px] absolute z-10 right-5 top-10">
      <image :src="cardIcon" />
    </view>
    <view class="text-base font-semibold">区域偏好数据</view>
    <view class="mt-5">
      <view class="text-xs">数据来源：用户预订卡座、拼酒局时选择的区域</view>
    </view>
    <lechart ref="chart" class="flex-auto"></lechart>
  </view>
</template>

<script setup lang="ts">
import cardIcon from '@/assets/img/todo/card_3.png'
import useBarOptions from '@/utils/eCharts/bar';
import useEcharts from '@/utils/eCharts/useEcharts';
import lechart from '@/components/lechart/index.vue';
const props = defineProps<{
  data: any
}>();

const { setOption } = useBarOptions()
const echartsOption = computed(() => {

  const data: any[] = props?.data
  return {
    xData: data?.map(n => (n.areaName)),
    yData: data?.map(n => (n.count))
  }
})

const option = setOption(echartsOption.value)
const { chart } = useEcharts(option)

</script>
