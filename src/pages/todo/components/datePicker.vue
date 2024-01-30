<template>
  <View>
    <text>取消</text>
    <text>完成</text>
  </View>
  <picker-view :value="[1, 1, 1]" class="h-[300rpx] bg-[#1b1b1f] text-white" @change="bindChange">
    <picker-view-column>
      <view class="item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
    </picker-view-column>
    <picker-view-column>
      <view class="item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
    </picker-view-column>
    <picker-view-column>
      <view class="item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
    </picker-view-column>
  </picker-view>
  <picker-view :value="[1, 1, 1]" class="h-[300rpx] bg-[#1b1b1f] text-white">
    <picker-view-column>
      <view class="item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
    </picker-view-column>
    <picker-view-column>
      <view class="item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
    </picker-view-column>
    <picker-view-column>
      <view class="item" v-for="(item, index) in 10" :key="index">{{ item }}日</view>
    </picker-view-column>
  </picker-view>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat.js')
dayjs.extend(customParseFormat)

const date = dayjs()
const years: Array<number> = []
const months: Array<number> = computed(() => {
  return new Array(31).fill(0).map((_, index) => index + 1)
})
const days: Array<number> = computed(() => {
  return new Array(31).fill(0).map((_, index) => index + 1)
})

for (let i = 1990; i <= date.year(); i++) {
  years.push(i)
}



const bindChange = (e) => {
  /* 所选的年月日的index */
  const _yearindex = e.detail.value[0]
  const _year = years[_yearindex]
  // const _monthindex = e.detail.value[1]
  // const _month = months[_monthindex]
  // const _dayindex = e.detail.value[2]
  console.log(_year);

  console.log(dayjs(_year).format('YYYY'));


}




</script>
