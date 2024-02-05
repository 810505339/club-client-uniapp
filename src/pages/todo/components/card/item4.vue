<template>

  <view class="h-[320px] rounded-3xl bg-[#8645BD80] p-6 text-[#E6C9FFFF] flex flex-col relative">
    <view class="w-[168px] h-[168px] absolute z-10 right-5 top-10">
      <image :src="cardIcon" />
    </view>
    <view class="text-base font-semibold">用户性别、年龄占比</view>
    <view class="text-xs flex items-center justify-between mt-2.5">
      <text>用户性别构成</text>
      <text>共计:{{ data?.customerTotalCount }}人</text>
    </view>
    <lechart ref="sex" class="flex-auto" />
    <lechart ref="chart" class="flex-auto" />
  </view>
</template>

<script setup lang="ts">
import cardIcon from '@/assets/img/todo/card_4.png'
import useEcharts from '@/utils/eCharts/useEcharts';
import lechart from '@/components/lechart/index.vue';
import usePieOptions from '@/utils/eCharts/pie';
import usehorizontalBarOptions from '@/utils/eCharts/horizontalBar';
const props = defineProps<{
  data: any
}>();

const { setOption } = usePieOptions({
  radius: ['40%', '70%'],
  legend: {
    orient: 'vertical',
    x: 'left',
    y: 'center',
    textStyle: {
      color: '#fff'
    },
    width: 400
  },
  grid: {
    bottom: '10%',
    left: '10%'

  },
  center: ['70%', '50%']

})

const customer = computed(() => {
  const customerAgeVOS: any[] = props?.data.customerAgeVOS
  return customerAgeVOS?.map(c => ({ name: c.ageSection, value: c.count }))
})


const option = setOption(customer.value)
const { chart } = useEcharts(option)

const { setOption: setSexOption } = usehorizontalBarOptions()


const customerGender = computed(() => {
  return props.data?.customerGenderVOS.map(c => ({
    name: c.gender,
    data: [c.count]
  }))
})

const sexOption = setSexOption(customerGender.value)
const { chart: sex } = useEcharts(sexOption)
</script>
