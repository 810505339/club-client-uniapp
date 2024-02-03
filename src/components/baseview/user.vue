<template>
  <view class="flex items-center absolute top-5 right-5 ">
    <text class="text-white opacity-75 text-xs  truncate mr-5 ">{{ userInfo.userName }}</text>
    <view class="h-8 w-8 bg-indigo-500 rounded-full">
      <image :src="userInfo.photo"></image>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useUserInfo } from '@/stores/useInfo';

const userStore = useUserInfo()
const { userInfo } = storeToRefs(userStore)
console.log(userInfo.value);

</script>
