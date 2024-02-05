<template>

  <view class="h-[340px] rounded-3xl bg-[#BB2B5D80] p-6 text-[#FEB6CBFF] flex flex-col relative">
    <view class="w-[168px] h-[168px] absolute z-10 right-5 top-10">
      <image :src="cardIcon" />
    </view>
    <view class="text-base font-semibold">用户来店方式占比</view>
    <lechart ref="chart" class="flex-auto" />
  </view>
</template>

<script setup lang="ts">
import cardIcon from '@/assets/img/todo/card_5.png'
import useEcharts from '@/utils/eCharts/useEcharts';
import lechart from '@/components/lechart/index.vue';
import usePieOptions from '@/utils/eCharts/pie';
const props = defineProps<{
  data: any
}>();

const { setOption } = usePieOptions({


})
const option = setOption(props.data.map(d => ({ name: d.enterWay, value: d.totalCount })))
const { chart } = useEcharts(option)


</script>
