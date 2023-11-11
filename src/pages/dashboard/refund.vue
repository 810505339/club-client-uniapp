<template>
  <base-view>
    <view class="p-5">
      <text class="text-xl text-white">{{ $t('dashboard.text4') }}</text>
      <view class="mt-5">
        <view v-for="item in state.list" class="bg-[#161616BF] rounded-xl my-5">
          <view class="p-2.5 border-b border-[#000000BF]  flex flex-col justify-between">
            <view class="text-white text-xs font-normal flex items-center justify-between">
              <view class="bg-violet-500 h-6 w-6 rounded-full"></view>
              <view class="text-overflow flex-auto mx-2.5">查看者昵称查看者昵称查看…</view>
              <view class="opacity-25">18:30</view>
            </view>
          </view>
          <view class="p-2.5 relative">
            <view v-for="info, index in state.infoList" :key="index" class="my-2.5">
              <view class="text-xs flex items-center text-white">
                <view class="opacity-50  w-16 font-light">{{ t(info.label) }}</view>
                <view class="font-semibold flex-auto" :class="info?.className">{{ info.value }}</view>
              </view>
            </view>
            <view class="absolute  bottom-2.5 right-2.5">
              <button
                class="rounded-3xl bg-[#EE2737FF] m-0 h-10  border-white border text-[ #000000]  text-base flex items-center justify-center font-semibold">{{
                  t('dashboard.refund.btn1') }}</button>
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
  list: Array.from({ length: 20 }, (_, index) => ({ id: index })),
  infoList: [
    { label: 'dashboard.refund.text1', value: '$ 356.00', className: 'text-[#EE2737] text-2xl' },
    { label: 'dashboard.refund.text2', value: '12164532132654321' },
    { label: 'dashboard.refund.text3', value: '13800000000' },
    { label: 'dashboard.refund.text4', value: '退费原因退费原因退费原因退费原因退费原因' },
    { label: 'dashboard.refund.text5', value: 'Ruth Martin' },
    { label: 'dashboard.refund.text6', value: '' },
  ]
})

const { t } = useI18n()
</script>
