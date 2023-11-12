<template>
  <base-view>
    <view class="p-5">
      <view class="flex items-center justify-between">
        <text class="text-xl text-white">{{ t('home.text') }}</text>
        
      </view>
      <view class="relative h-24  box mt-5 flex items-center justify-end rounded-xl">
        <view class="absolute boxicon z-10 left-0 bottom-0">
          <image :src="boxIcon"  mode="heightFix" />
        </view>
        <view class="h-full flex flex-col justify-between p-4">
          <view><text class="text-[20px] text-white">{{ t('home.text1') }}</text></view>
          <view><text class="text-[#EE2737FF] text-4xl font-bold ">5,465</text><text class="text-[20px] text-white">{{
            t('home.text2') }}</text></view>
        </view>
        <view class="h-full w-[180px] flex justify-center items-center shadow-md  border-[#000000BF] border-l">
          <text class="text-[20px] text-white opacity-50">{{ t('home.text3') }}</text>
        </view>
      </view>
      <view class="mt-5">
        <text class="text-xl text-white">{{ t('home.text4') }}</text>

        <view v-for="item, index in list" class="h-24 p-2.5 bg-[#161616BF]  rounded-xl my-2.5" :key="index">
          <view  class=" text-white text-sx">
            <text>门票区域/10张/预定门票</text>
          </view>
          <view class="opacity-50 text-white text-xs font-semibold">
            <text>备注：无</text>
          </view>
          <view class="opacity-50 text-white text-sx flex items-center justify-between">
            <text>2023/10/13 16:41:12</text>
            <text>Ruth Martin</text>
          </view>
        </view>


      </view>
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import boxIcon from '@/assets/img/home/box.png'
import { useI18n } from 'vue-i18n'
const list = Array.from({ length: 10 })

const { t } = useI18n()
</script>

<style scoped>
.box {
  background: linear-gradient(180deg, #252525 0%, #101010 100%), linear-gradient(128deg, rgba(216, 21, 21, 0.75) 0%, rgba(216, 21, 21, 0) 100%);
}

.boxicon {

  height: 200rpx;
}
</style>
