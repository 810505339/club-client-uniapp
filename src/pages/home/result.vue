<template>
  <base-view>
    <view class="p-5">
      <text class="text-xl text-white font-semibold">{{ t(`home.result.text`) }}</text>
      <view class="bg-[#161616bf] mt-5 p-5 pb-10">
        <view class="h-48">
          <image :src="box" />
        </view>
        <view class="text-center text-2xl text-white mt-5 font-semibold">
          {{ t(`home.result.text1`) }}
        </view>
        <view class="text-center text-xs  text-white mt-2.5 font-light">
          {{ t(`home.result.text2`) }}
          {{ 19 }}
          {{ t(`home.result.text3`) }}
        </view>
        <view class="text-center text-xs  text-white mt-5 font-semibold">
          {{ t(`home.result.text4`) }}

        </view>
        <view class="mt-1 text-white  text-sx font-light">
          备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容
        </view>
        <view class="flex items-center justify-between mt-10">
          <button
            class="rounded-3xl bg-[#161616BF] m-0 h-10   border-white border text-white opacity-50  text-base flex items-center justify-center">{{
              t('home.result.btn') }}</button>
          <button
            class="rounded-3xl bg-[#161616BF] m-0 h-10  border-white border text-white  text-base flex items-center justify-center">{{
              t('home.result.btn1') }}</button>
        </view>

      </view>
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import { useI18n } from 'vue-i18n';
import { imgUrl } from '@/utils/config';
const box=imgUrl+'success.png'
const { t } = useI18n()

</script>



<style scoped lang="scss">button {
  border: 1px solid;
}
</style>
