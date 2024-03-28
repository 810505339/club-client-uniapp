<template>
  <view class="w-80">
    <view class="w-full h-[118rpx] relative">
      <image :src="imgUrl + 'header.png'" />
      <view class="absolute z-10 inset-0 flex justify-center items-center text-white text-lg font-semibold">
        {{ title ?? t('base.title') }}
      </view>
    </view>
    <view class="bg-[#222222] p-5 rounded-b-[40rpx] overflow-hidden">
      <view>

        <view class="text-white text-xs font-semibold">
          {{ t('base.text') }}
          <text class="text-[#EE2737FF]">*必填</text>
        </view>


        <view class="mt-2.5 border-[#343434] border-[0.5px] p-2.5 rounded-xl bg-[#191919FF]">
          <textarea placeholder-class="textarea-placeholder" :placeholder='placeholder ?? `请仔细填写"审核说明"描述清楚详细原因，以便后续追溯`'
            v-model="textarea" />
        </view>
      </view>

      <view class="flex items-center justify-between py-2.5 gap-5">
        <button
          class="rounded-3xl bg-[#161616BF] h-10 flex-1 mr-5   btn   border-[#FFFFFF33]    text-white opacity-75  text-base flex items-center justify-center font-semibold"
          @click="emits('disagree', textarea)">{{ btn1 ??
        t('dashboard.fight.btn1') }}</button>
        <button @click="emits('agree', textarea)"
          class="rounded-3xl bg-[#EE2737FF] m-0 h-10 flex-1   border-white border text-[ #000000]  text-base flex items-center justify-center font-semibold">{{
        btn2 ??
        t('dashboard.fight.btn2') }}</button>
      </view>
    </view>
  </view>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { imgUrl } from '@/utils/config';
const { t } = useI18n()
defineProps<{
  title?: string;
  btn1?: string;
  btn2?: string;
  placeholder?: string
}>()
const emits = defineEmits(['agree', 'disagree', 'changeTextarea'])
const textarea = ref('')




</script>
<style scoped lang="scss">
:deep(.textarea-placeholder) {
  color: '#FFFFFF';
  opacity: 0.25;
  font-size: 28rpx;
}

uni-textarea {
  height: 100px;
}

textarea {
  color: #FFFFFF;
  font-size: 28rpx;
  font-weight: 400;
  height: 400rpx;
  width: 100%;
  background: #191919FF;
}

.btn {
  background: rgba(255, 255, 255, 0);
  border-radius: 33px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
