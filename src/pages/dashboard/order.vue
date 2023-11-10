<template>
  <base-view>
    <view class="p-5">
      <text class="text-xl text-white font-semibold">{{ $t(`dashboard.text1`) }}</text>
      <view>
        <view v-for="item in state.list" :key="item.id" class="h-24 bg-[#161616BF] my-2.5 rounded-xl">
            
        </view>
      </view>
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
const state = ref({
  list: Array.from({ length: 20 }, (_, index) => ({ id: index }))
})
onReachBottom(() => {
  console.log(11);

})
</script>
