<template>
  <view class="w-80">
    <view class="w-full h-[118rpx] relative">
      <image :src="imgUrl+'header.png'" />
      <view class="absolute z-10 inset-0 flex justify-center items-center text-white text-lg font-semibold">
        {{ t('base.title') }}
      </view>
    </view>
    <view class="bg-[#222222] p-5 rounded-b-[40rpx] overflow-hidden">
      <view>
        <view class="text-white text-xs font-semibold"> {{ t('base.text') }}</view>
        <view class="mt-2.5 border-[#343434] border p-2.5 rounded-xl">
          <textarea placeholder-class="textarea-placeholder" placeholder="请输入备注" v-model="textarea" />
        </view>
      </view>

      <view class="flex items-center justify-between p-2.5">
        <button
          class="rounded-3xl bg-[#161616BF] m-0 h-10    border border-[#FFFFFF33]  text-white opacity-75  text-base flex items-center justify-center font-semibold"
          @click="emits('disagree', textarea)">{{
            t('dashboard.fight.btn1') }}</button>
        <button @click="emits('agree', textarea)"
          class="rounded-3xl bg-[#EE2737FF] m-0 h-10  border-white border text-[ #000000]  text-base flex items-center justify-center font-semibold">{{
            t('dashboard.fight.btn2') }}</button>
      </view>
    </view>
  </view>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import { imgUrl } from'@/utils/config';
const { t } = useI18n()
const emits = defineEmits(['agree', 'disagree', 'changeTextarea'])
const textarea = ref('')




</script>
<style scoped lang="scss">
:deep(.textarea-placeholder) {
  color: '#FFFFFF';
  opacity: 0.25;
  font-size: 28rpx;
  fontWeight: 400
}

uni-textarea {
  height: 100px;
}

textarea {
  color: #FFFFFF;
  font-size: 28rpx;
  fontWeight: 400;
  height: 400rpx;
  width: 100%;
}
</style>
