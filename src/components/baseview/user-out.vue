<template>
  <view class="mx-[45px]">
    <view class="w-full h-[118rpx] relative flex items-center justify-center">
      <image :src="imgUrl + 'header.png'" class="absolute inset-0 -z-10" />
      <text class="text-xl font-600">安全退出</text>
    </view>
    <view class="bg-[#222222] py-5  rounded-b-[40rpx] overflow-hidden">
      <view>
        <view class="text-[10px] text-center pb-10">
          您确认退出管理小程序登录？
        </view>
      </view>

      <view class="flex items-center justify-between p-2.5">
        <button
          class="rounded-3xl  bg-transparent m-0 h-10  btn  text-white opacity-75  text-base flex items-center justify-center font-semibold w-32 mr-4"
          @click="close">取消</button>
        <button
          class="rounded-3xl bg-[#EE2737FF] m-0 h-10  border-white border text-[ #000000]  text-base flex items-center justify-center font-semibold w-32"
          @click="confirm">退出</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { imgUrl } from '@/utils/config';
import { usePopup } from '@/stores/usePopup';


defineProps<{ userRef: boolean }>()
const emits = defineEmits(['update:userRef'])
const store = usePopup()
async function confirm() {

  await uni.clearStorageSync()
  uni.navigateTo({
    url: "/pages/login/index"
  })
}

function close() {
  store.close()
  emits('update:userRef', false)
}

</script>
<style scoped lang="scss">
.btn {
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
