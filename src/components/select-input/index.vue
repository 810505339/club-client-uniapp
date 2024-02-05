<template>
  <view class="text-[#ffffff80] text-xs mb-2 mt-5">{{ title }}</view>
  <view
    class="rounded-md flex flex-row items-center justify-between border border-[#ffffff40] p-2 text-base box-border text-[#FFFFFFFF]">
    <slot />
    <image :src="icon" v-if="icon" class="w-4 h-4" />
  </view>
  <!-- 
     <picker :value="index" :range="array" class="w-full">
      <view>{{ array[index] }}</view>
    </picker>
   -->
</template>


<script setup lang="ts">
const props = defineProps<{
  title: string
  icon?: string
}>()

</script>
