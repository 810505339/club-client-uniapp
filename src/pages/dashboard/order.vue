<template>
  <base-view :show-popup="true" :refresherEnabled="true" @refresh="refresh" @loadMore="getList">
    <view class="p-5">

      <text class="text-xl text-white font-semibold ">{{ $t(`dashboard.text1`) }}</text>
      <u-tabs :list="tabList" :activeStyle="{
    color: '#FFFFFFFF',
  }" lineColor="#FFFFFFFF" :inactiveStyle="{
    color: '#FFFFFFFF',
    opacity: 0.5

  }" @change="tabChange">
      </u-tabs>
      <view class="mt-5">

        <ScList v-bind="formData">
          <view v-for="item in list" :key="item.id"
            class="min-h-24 bg-[#161616BF] my-2.5 rounded-xl flex items-center p-2.5">
            <view class="flex-auto h-full text-white font-normal">
              <view class="text-base font-semibold">{{ item.storeName }} - {{ item.areaName }}</view>
              <view class="text-base my-2">{{ item.commodityName }}</view>
              <view class="opacity-50 text-sm ">
                <text class="mr-2.5">支付金额:</text>
                <text>${{ item.orderAmount }}</text>
              </view>
            </view>
            <view @click="open(item)"
              :class='` ml-[10px] w-16 shrink-0  rounded-md h-full flex items-center justify-center text-white text-xs font-semibold ${btnStyle(item)} min-h-24`'>
              {{ item.handleStatus == HANDLESTATUS.待处理 ? '确认' : '已处理' }}
            </view>
          </view>
        </ScList>
      </view>
      <!-- <view class="mt-5">
        <view v-for="item in state.list" :key="item.id"
          class="h-24 bg-[#161616BF] my-2.5 rounded-xl flex items-center p-2.5">
          <view class="flex-auto h-full text-white font-normal">
            <view class="text-base font-semibold">Lounge - L24</view>
            <view clas="text-base">套餐一</view>
            <view class="opacity-50 text-sm">
              <text class="mr-2.5">6人</text>
              <text>已入场</text>
            </view>
          </view>
          <view
            class="w-16 bg-[#EE2737FF] rounded-md h-full flex items-center justify-center text-white text-xs font-semibold">
            确认
          </view>
        </view>
      </view> -->
    </view>
    <template v-slot:popup>
      <modal @sure="sure"></modal>
    </template>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import useList from '@/hooks/useList';
import ScList from '@/components/list/index.vue'
import { getOrderList } from '@/api/dashboard/order'
import uTabs from 'uview-plus/components/u-tabs/u-tabs.vue';
import { usePopup } from '@/stores/usePopup'
import modal from './components/modal.vue'

enum HANDLESTATUS {
  待处理 = 'false',
  已处理 = 'true'
}

const popup = usePopup()

const formState = ref({
  params: {
    isHandle: HANDLESTATUS.待处理
  },
  load: getOrderList
})
const { list, refresh, getList, formData } = useList(formState)



const tabList = ref([
  {
    name: '待处理',
  },
  {
    name: '已处理'
  }
])

async function tabChange(tabItem: any) {
  console.log(tabItem.index);
  formState.value.params = {
    handleStatus: tabItem.index === 0 ? HANDLESTATUS.待处理 : HANDLESTATUS.已处理
  }
  await refresh()

}

const btnStyle = (item: any) => {
  return item.handleStatus == HANDLESTATUS.已处理 ? `bg-[#EE2737FF]` : `bg-[#161616BF]`
}

/* 确认未确认弹窗 */

function open(item: any) {
  console.log(item.handleStatus);
  popup.open('center')
  if (item.handleStatus == HANDLESTATUS.已处理) { return }


}

/* 点击同意or不同意 弹窗  确认按钮 */
async function sure() {
  // await broadcastAudit({
  //   broadcastId: clickItem.value.id,
  //   auditAction: clickItem.value.actionAuditAction,
  //   taskId: clickItem.value.taskId
  // })
  // /* 请求成功以后刷新列表 */
  await refresh()
  // console.log(res);
}


</script>

<style scoped lang="scss">
.login {
  width: 10px;
}
</style>
