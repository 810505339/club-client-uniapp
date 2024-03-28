<template>
  <view class="flex items-center absolute top-5 right-5 " @click="emit('click')">
    <text class="text-white opacity-75 text-xs  truncate mr-5 ">{{ userInfo.userName }}</text>
    <view class="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center">
      <image :src="userInfo.photo" @error="error" v-if="isAvatarShow" />
      <uni-icons type="person" size="20" v-else />
    </view>
  </view>
</template>

<script setup lang="ts">
import { useUserInfo } from '@/stores/useInfo';
import { usePopup } from '@/stores/usePopup';
import { imgUrl } from '@/utils/config';
const emit = defineEmits(['click'])
const userStore = useUserInfo()
const { userInfo } = storeToRefs(userStore)



onMounted(async () => {
  await userStore.setUserInfo()
})

const isAvatarShow = ref(true)

function error() {
  isAvatarShow.value = false
}
async function confirm() {

  await uni.clearStorageSync()
  uni.navigateTo({
    url: "/pages/login/index"
  })
}
</script>

<style scoped lang="scss"></style>
