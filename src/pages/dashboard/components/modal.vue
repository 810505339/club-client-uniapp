<template>
  <view class="w-80">
    <view class="w-full h-[118rpx] relative">
      <image :src="headerIcon" />
      <view class="absolute z-10 inset-0 flex justify-center items-center text-white text-lg font-semibold">
        {{ t('modal.title') }}
      </view>
    </view>
    <view class="bg-[#222222] p-5 rounded-b-[40rpx] overflow-hidden">
      <view class="text-center text-white text-base pb-2.5">
        {{ t('modal.context') }}
      </view>

      <view class="flex items-center justify-between pt-2.5">
        <button @click="cancel"
          class="rounded-3xl bg-[#161616BF] m-0 h-10  w-32   border border-[#FFFFFF00]  text-white opacity-75  text-base flex items-center justify-center font-semibold">{{
            t('modal.btn2') }}</button>
        <button @click="sure"
          class="rounded-3xl bg-[#EE2737FF] m-0 h-10 w-32  text-[ #000000]  text-base flex items-center justify-center font-semibold">{{
            t('modal.btn1') }}</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import headerIcon from '@/assets/img/base/header.png'
import { usePopup } from '@/stores/usePopup';
const { t } = useI18n()
const popup = usePopup()
const emit = defineEmits(['cancel', 'sure'])

/* 点击取消按钮 */
function cancel() {
  emit('cancel')
  popup.close()
}
/* 点击确认按钮 */
async function sure() {
  await emit('sure')
  popup.close()
}
</script>
