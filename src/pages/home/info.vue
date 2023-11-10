<template>
  <base-view>
    <view class="p-5">
      <text class="text-xl text-white">{{ t('home.text') }}</text>
      <view class="mt-5 bg-[#161616BF] p-5 rounded-3xl">
        <view class="flex">
          <view class="h-16 w-28 bg-violet-500 rounded-xl">
            <!-- <image   mode="heightFix" /> -->
          </view>
          <view class="ml-2.5 ">
            <view class="text-base font-semibold text-white">用户姓名</view>
            <view class="text-base font-semibold text-white">0215-58643262</view>
          </view>

        </view>
        <view class="mt-5">
          <view class="text-xs text-white font-semibold">{{ t('home.info.text') }}</view>
          <view class="text-white">
            <view v-for="item in state.list" :key="item.id" class="text-white mt-4 flex  justify-between ">
              <text class="opacity-50 text-sx font-light">{{ t(item.label) }}</text>
              <text class="text-base text-right w-40 font-normal  break-all ">{{ item.value }}</text>
            </view>
          </view>
          <view class="text-xs text-white font-semibold mt-8">门票信息</view>
          <view class="mt-2.5 border-[#343434] border p-2.5 rounded-xl">
            <textarea placeholder-class="textarea-placeholder" placeholder="占位符字体是红色的" />
          </view>
        </view>
      </view>
    </view>
    <view class="h-14">
      <view class="fixed h-14  bg-[#0B0B0BE6] z-50 bottom-0 left-0 right-0 w-screen">
        <view class=" flex items-center justify-between w-full h-14 px-5">
          <view class="flex items-center">
            <view class="w-6 h-6">
              <image :src="btn1" />
            </view>
            <view class="w-20 h-10 border border-[#ffffff3f] rounded-xl mx-2 text-[#ffffff] px-4">
              <input type="number" class="w-full h-full"  />
            </view>
            <view class="w-6 h-6">
              <image :src="btn2" />
            </view>
          </view>
          <button
            class="rounded-3xl bg-[#EE2737FF] m-0 h-10 w-20 text-[#0C0C0C]  text-base flex items-center justify-center">{{
              t('home.info.btn') }}</button>
        </view>

      </view>
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import { StyleValue } from 'vue';
import { useI18n } from 'vue-i18n';
import btn1 from '@/assets/img/home/info/btn1.png'
import btn2 from '@/assets/img/home/info/btn2.png'

const { t } = useI18n()
const placeholderStyle: StyleValue = {
  color: '#FFFFFF',
  opacity: 0.25,
  fontSize: '14px',
  fontWeight: 400
}
const state = ref({
  list: [
    { id: 0, label: 'home.info.text1', value: '11111111112222222211111111' },
    { id: 1, label: 'home.info.text2', value: '11' },
    { id: 2, label: 'home.info.text3', value: '11' },
    { id: 3, label: 'home.info.text4', value: '11' },
    { id: 4, label: 'home.info.text5', value: '11' },
    { id: 5, label: 'home.info.text5', value: '11' },
  ],
})

onPageScroll((e) => {
  console.log(e);
})

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
  height: 200rpx;
}
</style>
