<template>
  <base-view>
    <view class="p-5">
      <text class="text-xl text-white">{{ $t('dashboard.text3') }}</text>
      <view class="mt-5">
        <view v-for="item in state.list" class="bg-[#161616BF] rounded-xl my-5">
          <view>
            <view
              class="text-white text-xs font-normal flex items-center justify-between p-2.5 border-b border-[#000000FF]">
              <view class="bg-violet-500 h-6 w-6 rounded-full"></view>
              <view class="text-overflow flex-auto mx-2.5">查看者昵称查看者昵称查看…</view>
              <view class="opacity-25">18:30</view>
            </view>
            <view class="p-2.5">
              <view class="text-white text-xs">
                <text class="opacity-50">{{ t('dashboard.radio.type') }}:</text>
                <text class="font-semibold ml-2">户外大屏</text>
              </view>
              <view class="text-white font-normal text-sm">
                这次的体验还挺不错的，大家都很nice～
              </view>
              <view class="mt-3 flex">
                <view v-for="img in 4" class="bg-violet-500 mr-2.5 rounded h-20 w-20 flex items-center justify-center">
                  {{ img }}
                </view>
              </view>
            </view>
            <view class="flex items-center justify-between p-2.5">
              <button
                class="rounded-3xl bg-[#161616BF] m-0 h-10    border border-[#FFFFFF33]  text-white opacity-75  text-base flex items-center justify-center font-semibold">{{
                  t('dashboard.fight.btn1') }}</button>
              <button
                class="rounded-3xl bg-[#EE2737FF] m-0 h-10  border-white border text-[ #000000]  text-base flex items-center justify-center font-semibold">{{
                  t('dashboard.fight.btn2') }}</button>
            </view>
          </view>

        </view>
      </view>
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import { useI18n } from 'vue-i18n';
const state = ref({
  list: Array.from({ length: 20 }, (_, index) => ({ id: index }))
})

const { t } = useI18n()
</script>
