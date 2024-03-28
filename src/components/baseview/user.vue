<template>
  <view class="flex items-center absolute top-5 right-5 " @click="loginOut">
    <text class="text-white opacity-75 text-xs  truncate mr-5 ">{{ userInfo.userName }}</text>
    <view class="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center">
      <image :src="userInfo.photo" @error="error" v-if="isAvatarShow" />
      <uni-icons type="person" size="20" v-else />
    </view>
  </view>

  <uni-popup :catchtouchmove="true" ref="popup" type="center" class="popup">
    <view class="w-80">
      <view class="w-full h-[118rpx] relative flex items-center justify-center">
        <image :src="imgUrl + 'header.png'" class="absolute inset-0 -z-10" />
        <text class="text-xl font-600">安全退出</text>
      </view>
      <view class="bg-[#222222] py-5 rounded-b-[40rpx] overflow-hidden">
        <view>
          <view class="text-xs text-center">
            您确认退出管理小程序登录？
          </view>
        </view>

        <view class="flex items-center justify-between p-2.5">
          <button
            class="rounded-3xl bg-[#161616BF] m-0 h-10    border border-[#FFFFFF33]  text-white opacity-75  text-base flex items-center justify-center font-semibold w-32"
            @click="close">取消</button>
          <button
            class="rounded-3xl bg-[#EE2737FF] m-0 h-10  border-white border text-[ #000000]  text-base flex items-center justify-center font-semibold w-32"
            @click="confirm">退出</button>
        </view>
      </view>
    </view>
  </uni-popup>
</template>

<script setup lang="ts">
import { useUserInfo } from '@/stores/useInfo';
import { usePopup } from '@/stores/usePopup';
import { imgUrl } from '@/utils/config';
const userStore = useUserInfo()
const { userInfo } = storeToRefs(userStore)
const store = usePopup()
const { popup: basePopup } = storeToRefs(store)
const popup = ref(null)


onMounted(async () => {
  await userStore.setUserInfo()
})

const isAvatarShow = ref(true)

function error() {
  isAvatarShow.value = false
}
/* 点击退出 */
function loginOut() {
  popup.value?.open('center')
  basePopup.value.open('center')

  // uni.clearStorageSync()
}
/*  */
function close() {
  popup.value?.close()
  basePopup.value.close()

}

async function confirm() {
  close()
  await uni.clearStorageSync()
  uni.navigateTo({
    url: "/pages/login/index"
  })
}

</script>

<style scoped lang="scss"></style>
