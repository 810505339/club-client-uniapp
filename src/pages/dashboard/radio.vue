<template>
  <base-view :refresherEnabled="true" @refresh="refresh" @loadMore="getList" :showPopup="true">
    <view class="p-5">
      <text class="text-xl text-white">{{ $t('dashboard.text3') }}</text>
      <view class="mt-5">

        <ScList v-bind="formData">
          <view v-for="item in list" class="bg-[#BF161616] rounded-xl my-5" :key="item.id">
            <card v-bind="reviewStatus(item)">
              <view>
                <view
                  class="text-white text-xs font-normal flex items-center justify-between p-2.5 border-b border-[#000000FF]">
                  <view class="bg-violet-500 h-6 w-6 rounded-full">
                    <!-- 头像 -->
                    <image :src="avatar(item)" />
                  </view>
                  <view class="text-overflow flex-auto mx-2.5 text-ellipsis">{{ item.applicantName }}</view>
                  <view class="opacity-25">{{ item.broadcastTime }}</view>
                </view>
                <view class="p-2.5">
                  <view class="text-white text-xs">
                    <text class="opacity-50">{{ t('dashboard.radio.type') }}:</text>
                    <text class="font-semibold ml-2">{{ item.upperScreenType }}</text>
                  </view>
                  <view class="text-white font-normal text-sm py-2.5">
                    <rich-text :nodes="item.upperScreenContent"></rich-text>

                  </view>
                  <!-- <view class="mt-3 flex">
                  <view v-for="img in 4" class="bg-violet-500 mr-2.5 rounded h-20 w-20 flex items-center justify-center">
                    {{ img }}
                  </view>
                </view> -->
                </view>
                <view class="flex items-center justify-between px-2.5 pb-2.5" v-if="!reviewStatus(item).show">
                  <button style="border-color:#FFFFFF33; "
                    class="rounded-3xl bg-[rgba(255,255,255,0)] m-0 h-10 w-36   border    text-white opacity-75  text-base flex items-center justify-center font-semibold"
                    @click="action(item, AUDITSTATE.拒绝)">{{
    t('dashboard.fight.btn1') }}</button>
                  <button
                    class="rounded-3xl bg-[#EE2737FF] m-0 h-10  w-36   border-white border text-[ #000000]  text-base flex items-center justify-center font-semibold"
                    @click="action(item, AUDITSTATE.通过)">{{
    t('dashboard.fight.btn2') }}</button>
                </view>
              </view>
            </card>
          </view>
        </ScList>
      </view>
    </view>

    <template v-slot:popup>
      <modal @sure="sure" />
    </template>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import { useI18n } from 'vue-i18n';
import { getRadioList, broadcastAudit } from '@/api/dashboard/radio'
import useList from '@/hooks/useList';
import ScList from '@/components/list/index.vue'
import card from './components/card.vue'
import { useUserInfo } from '@/stores/useInfo'
import { usePopup } from '@/stores/usePopup'
import modal from './components/modal.vue'
import { reviewStatus, AUDITSTATE } from './hooks/reviewStatus'


const formState = ref({
  params: {
    status: 'USED'
  },
  load: getRadioList
})

/* 记录点击的item */
const clickItem = ref<any>({

})

const { list, refresh, getList, formData } = useList(formState)

const { t } = useI18n()


const userStore = useUserInfo()
const popup = usePopup()





const avatar = computed(() => {
  return function (item: any) {
    if (item?.avatar) {
      return `${userStore.fileUrl}/${item?.avatar?.fileName}`
    }
  }
})


/* 点击按钮动作:通过驳回 */
const action = async (item: any, auditAction: AUDITSTATE) => {
  popup.open('center')
  //弹窗
  clickItem.value = item
  /* 记录操作 */
  clickItem.value.actionAuditAction = auditAction
}

/* 点击同意or不同意 弹窗  确认按钮 */
async function sure() {
  await broadcastAudit({
    broadcastId: clickItem.value.id,
    auditAction: clickItem.value.actionAuditAction,
    taskId: clickItem.value.taskId
  })
  /* 请求成功以后刷新列表 */
  refresh()
  // console.log(res);
}


</script>

<style></style>
