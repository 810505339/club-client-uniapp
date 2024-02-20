<template>
  <base-view>
    <view class="p-5 h-full">
      <text class="text-xl text-white">{{ t('dashboard.text') }}</text>
      <view class="mt-5">
        <view v-for="item in list" :key="item.id" class="relative  h-28  flex justify-between items-center p-5 my-2.5"
          @click="handleClick(item)">
          <image :src="item.box" class="absolute inset-0 -z-10 w-full" />
          <view :style="{ color: item.color }" class="h-full flex flex-col justify-between">
            <view class="font-bold">{{ t(item.text) }}</view>
            <view><text class="font-bold text-5xl">{{ item.value }}</text> {{ t(item.tag) }}</view>
          </view>
          <view class="w-[64rpx] h-[64rpx]">
            <image :src="item.btn" />
          </view>
        </view>
      </view>
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import { useI18n } from 'vue-i18n';
import useData, { IData } from './hooks/usedata'
const { t } = useI18n()
const { list } = useData()
function handleClick(item: IData) {
  uni.navigateTo({
    url: item.url
  })
}
</script>

