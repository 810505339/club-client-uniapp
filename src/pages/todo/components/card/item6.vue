<template>

  <div class="h-[340px] rounded-3xl bg-[#278BA880]  p-6 flex text-[#98DCEAFF] flex-col relative">
    <view class="w-[168px] h-[168px] absolute z-10 right-0 top-10">
      <image :src="cardIcon" />
    </view>
    <header class="text-base font-semibold">拼酒局数据概况</header>
    <div class="text-xs font-semibold">拼酒局总次数 <span class="text-white text-2xl ml-2">{{ data?.winePartyTotalCount }}
        次</span>
    </div>
    <div class="text-xs font-semibold">拼酒局成功率 <span class="text-white text-2xl ml-2">{{ data?.successRateTotal }} %</span>
    </div>
    <lechart ref="chart" class="flex-auto" />
  </div>
</template>

<script setup lang="ts">
import lechart from '@/components/lechart/index.vue'
import { useStackedChatOptions } from '@/utils/eCharts/stackedChat';
import { imgUrl } from '@/utils/config';
const cardIcon = imgUrl + 'card_6.png'
const props = defineProps<{
  data: any
}>();
import useEcharts from '@/utils/eCharts/useEcharts'


const { setOption } = useStackedChatOptions()

const echartsOption = computed(() => {

  const winePartyDateVOS: any[] = props.data?.winePartyDateVOS
  return {
    xData: winePartyDateVOS?.map(n => (n.dataDate)),
    yData: [
      { name: '总成功率', data: winePartyDateVOS?.map(n => (n.successRate)) },
      { name: '总次数', data: winePartyDateVOS?.map(n => (n.winePartyCount)) }]
  }
})
const option = setOption(echartsOption.value)
const { chart } = useEcharts(option)


</script>
