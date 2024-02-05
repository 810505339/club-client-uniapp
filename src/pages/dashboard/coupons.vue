<template>
  <base-view :show-popup="true" :refresherEnabled="true" @refresh="refresh" @loadMore="getList">
    <view class="p-5">
      <text class="text-xl text-white">{{ $t('dashboard.text5') }}</text>

      <ScList v-bind="formData">

        <card>
          <view class="mt-5">
            <view v-for="item in list" class="bg-[#161616BF] rounded-xl my-5" :key="item.id">
              <view class="p-2.5  flex flex-col justify-between">
                <view class="text-white text-2xl font-normal flex items-center justify-between text-ellipsis">
                  <!-- <view class="bg-violet-500 h-6 w-6 rounded-full"></view>
                <view class="text-overflow flex-auto mx-2.5">{{item.createBy}}</view>
                <view class="opacity-25">{{ item.createTime }}</view> -->
                  {{ item.name }}
                </view>

              </view>
              <view class="p-2.5 relative">
                <view v-for="info, index in state.infoList" :key="index" class="my-2.5">
                  <view class="text-xs flex items-center text-white">
                    <view class="opacity-50  min-w-16 font-light">{{ t(info.label) }}</view>

                    <view class="font-semibold flex-auto" :class="info?.className">{{ info.value(item, info) }}
                    </view>
                  </view>
                </view>
                <view class="absolute  bottom-2.5 right-2.5">
                  <button @click="handleClick(item)"
                    class="rounded-3xl bg-[#EE2737FF] m-0 h-10  border-white border text-[ #000000]  text-base flex items-center justify-center font-semibold">{{
                      t('dashboard.refund.btn1') }}</button>
                </view>

              </view>

            </view>
          </view>
        </card>

      </ScList>



    </view>
    <template v-slot:popup>
      <popup @disagree="disagree" @agree="agree" />
    </template>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import popup from '@/components/popup/index.vue';
import { usePopup } from '@/stores/usePopup';
import { useI18n } from 'vue-i18n';
import { getCouponList, couponAudit } from '@/api/dashboard/coupons'
import useList from '@/hooks/useList';
import ScList from '@/components/list/index.vue'
const formState = ref({
  params: {
    status: 'USED'
  },
  load: getCouponList
})

const { list, refresh, getList, formData } = useList(formState)


/* 记录点击的item */
const clickItem = ref<any>({

})


function defaultValue(item: any, info: any) {
  return `${item[info.key]}`
}

const state = ref({
  list: Array.from({ length: 20 }, (_, index) => ({ id: index })),
  infoList: [
    {
      label: 'dashboard.coupons.text1', className: 'text-[#EE2737]', value: (item: any) => {
        const { couponTypeDetailVO } = item
        const unitE = couponTypeDetailVO.type === 'DISCOUNT_VOUCHERS' ? '折' : '';
        const unitS = couponTypeDetailVO.type !== 'DISCOUNT_VOUCHERS' ? '$' : '';
        return `${unitS} ${couponTypeDetailVO.discount} ${unitE}`
      },

    },
    { label: 'dashboard.coupons.text2', value: defaultValue, key: 'createTime' },
    // { label: 'dashboard.coupons.text3', value: '2023/11/06', },
    {
      label: 'dashboard.coupons.text4', value: (item: any) => {
        return item.issueWay === 1 ? `系统发放` : `指定用户`
      }, key: 'issueWay'
    },
    { label: 'dashboard.coupons.text5', value: defaultValue, key: 'createBy' },
    { label: 'dashboard.coupons.text6', value: () => { }, },
  ]
})


const { t } = useI18n()

const store = usePopup()


function handleClick(item: any) {
  console.log(store);

  store.open('center')
  clickItem.value = item
}

function disagree(value: string) {
  console.log(value);
  handleCheck(value, 'REJECT')

}

function agree(value: string) {
  console.log(value);
  handleCheck(value, 'PASS')
}

async function handleCheck(remark: string, auditAction: string) {
  await couponAudit({
    remark,
    taskId: clickItem.value.taskId,
    auditAction
  })
}


</script>
