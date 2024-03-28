<template>
  <view class="bg-[#EE2737]  p-[8px] rounded-[999999px] fixed scroll-top" @click="scrollTop">
    <image class="w-[16px] h-[16px]  block" :src="backTop" />
  </view>
</template>

<script setup lang="ts">
import backTop from '@/static/img/back-top.png'
const emits = defineEmits(["click"]);
const scrollTop = () => {

  emits("click");
}
</script>
<style scoped>
.scroll-top {
  z-index: 999;
  top: 70%;
  right: 20px;
}
</style>
