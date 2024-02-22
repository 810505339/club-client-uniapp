<template>
  <view class="rounded-3xl bg-[#CB7B2480] py-6  text-[#EBB77FFF] flex flex-col relative h-[340px]">
    <view class="w-[168px] h-[168px] absolute z-10 right-5 top-10">
      <image :src="cardIcon" />
    </view>
    <view class="text-base font-semibold px-6">酒水套餐排行榜</view>
    <view class="mt-5 px-6" v-if="data.length > 0">
      <view v-for="item, index in data" :key="index" class="flex justify-center items-center">
        <text class="bg-[#EBB77F]  h-4 py-1 px-1.5 rounded-lg flex items-center   text-[#000000] text-xs">No.{{
          index + 1
        }}</text>
        <view class="flex-auto ml-4">
          <view class="truncate">{{ item?.drinksMealName }}</view>
        </view>
        <text class="flex-shrink-0 font-bold text-lg text-white ml-4">{{ item?.count }} 次</text>
      </view>
    </view>

    <view v-else class="flex items-center justify-center w-full h-full">
      <text>暂无数据</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import cardIcon from '@/assets/img/todo/card_2.png'
defineProps<{
  data: any
}>();

</script>
