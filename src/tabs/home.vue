<template>
  <base-view :refresherEnabled="true" @refresh="refresh" @loadMore="getList">
    <view class="p-5">
      <view class="flex items-center justify-between">
        <text class="text-xl text-white">{{ t('home.text') }}</text>

      </view>
      <view class="relative h-24  box mt-5 flex items-center justify-end rounded-xl">
        <view class="absolute boxicon z-10 left-0 bottom-0">
          <image :src="imgUrl + 'box.png'" mode="heightFix" />
        </view>
        <view class="h-full flex flex-col justify-between p-4">
          <view><text class="text-[10px] text-white">{{ t('home.text1') }}</text></view>
          <view><text class="text-[#EE2737FF] text-4xl font-bold ">{{ number }}</text><text
              class="text-[20px] text-white">{{
                t('home.text2') }}</text></view>
        </view>
        <!-- 开始扫码 -->
        <view class="h-full w-[90px] flex flex-col justify-center items-center shadow-md  border-[#000000BF] border-l"
          @click="handleCheck">
          <image :src="imgUrl + 'home-btn.png'" class="w-12 h-12" />
          <text class="text-[10px] text-white opacity-50 mt-2.5">{{ t('home.text3') }}</text>
        </view>
      </view>
      <view class="mt-5">
        <text class="text-xl text-white">{{ t('home.text4') }}</text>




        <!-- list -->

        <CsList v-bind:="formData">
          <view v-for="item, index in list" class="h-24 p-2.5 bg-[#161616BF]  rounded-xl my-2.5" :key="index">
            <view class=" text-white text-sx">
              <text>{{ ticketName(item) }}</text>
            </view>
            <view class="opacity-50 text-white text-xs font-semibold my-2">
              <text>备注：{{ item.remark }}</text>
            </view>
            <view class="opacity-50 text-white text-xs flex items-center justify-between">
              <text>{{ item.checkTime }}</text>
              <text>{{ item.checkPerson }}</text>
            </view>
          </view>
        </CsList>




      </view>
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import { useI18n } from 'vue-i18n'
import useList from '@/hooks/useList'
import { ticketByList, ticketCheck } from '@/api/ticket'
import useTodayNumber from './hooks/useTodayNumber'
import CsList from '@/components/list/index.vue'

import { imgUrl } from '@/utils/config';

const formState = ref({
  params: {
    status: 'USED'
  },
  load: ticketByList
})

const { list, refresh, getList, formData } = useList(formState)
/* 获取每日扫码数量 */
const { number } = useTodayNumber()
const { t } = useI18n()


/* computed */

const ticketName = computed(() => {
  return function (ticket: any) {
    const { areaName, checkNumber, usageType } = ticket as any

    return [areaName, checkNumber + '张', usageType].join('/')
  }
})


/* 点击开始扫码 */
async function handleCheck() {
  // uni.scanCode({
  //   scanType: ['qrCode'],
  //   success: (res) => {
  //     console.log(res);
  //   }
  // })
  // uni.navigateTo({
  //   url: '/pages/home/info'
  // })
  await ticketCheck({
    id: '1759123500481671170',
    checkNumber: 1,
    remark: '测试核销'
  })

}





</script>

<style scoped>
.box {
  background: linear-gradient(180deg, #252525 0%, #101010 100%), linear-gradient(128deg, rgba(216, 21, 21, 0.75) 0%, rgba(216, 21, 21, 0) 100%);
}

.boxicon {

  height: 200rpx;
}
</style>
