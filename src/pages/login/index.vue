<template>
  <base-view :img="bg" :show-logo="false">
    <view class="absolute left-5 right-5  top-1/2 -translate-y-1/2">
      <view class=" z-0  h-11 flex flex-row items-center  mb-5">
        <view class="w-[61px] h-[32px] mx-2.5">
          <image :src="logo" />
        </view>
        <view>
          <text class="text-4xl text-white">{{ t('login.title') }}</text>
        </view>

      </view>

      <view class="rounded-3xl z-0 bg-[#222222BF] h-60 p-5 flex-col justify-between overflow-hidden ">
        <view class="rounded-xl bg-[#191919FF]">
          <input class="uni-input text-[#FFFFFFFF] text-xs px-4 " type="text" focus placeholder="自动获得焦点" />
          <view class="border-[#ffffff19] border-b h-[1px]"></view>
          <input type="text" class="uni-input text-[#FFFFFFFF] text-xs px-4" placeholder="自动获得焦点" password />

        </view>
        <view class="flex flex-row items-center justify-center h-10">
          <text class="text-white opacity-50 text-xs">{{ t('login.text') }}</text>
        </view>
        <view class="flex-grow-1 mt-auto flex">
          <button @click="toNext"
            class="rounded-3xl bg-[#EE2737FF] h-10 w-full text-[#0C0C0C] text-base flex items-center justify-center">{{
              t('login.login') }}</button>
        </view>
      </view>
    </view>
  </base-view>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.png'
import bg from '@/assets/img/bg.png'
import { useI18n } from 'vue-i18n';
import baseView from '@/components/baseview/index.vue'

const { t } = useI18n()
const showPassword = ref(false)

function toNext() {
  uni.switchTab({
    url: '/pages/home/index'
  })
}
</script>

<style scoped lang="scss">
:deep(.uni-input) {
  height: 50px;

  .uni-input-wrapper {


    .uni-input-placeholder {
      left: auto;
    }
  }
}
</style>
