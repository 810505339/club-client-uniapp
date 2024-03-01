<template>
  <view class="bg-[#EE2737] w-32px h-32px rounded-full fixed scroll-top" @click="scrollTop">
    <uni-icons type="arrow-up" size="30"></uni-icons>
  </view>
</template>

<script setup lang="ts">
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
