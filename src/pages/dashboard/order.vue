<template>
  <base-view>
    <view class="p-5">

      <text class="text-xl text-white font-semibold ">{{ $t(`dashboard.text1`) }}</text>

    
      <!-- <view class="mt-5">
        <view v-for="item in state.list" :key="item.id"
          class="h-24 bg-[#161616BF] my-2.5 rounded-xl flex items-center p-2.5">
          <view class="flex-auto h-full text-white font-normal">
            <view class="text-base font-semibold">Lounge - L24</view>
            <view clas="text-base">套餐一</view>
            <view class="opacity-50 text-sm">
              <text class="mr-2.5">6人</text>
              <text>已入场</text>
            </view>
          </view>
          <view
            class="w-16 bg-[#EE2737FF] rounded-md h-full flex items-center justify-center text-white text-xs font-semibold">
            确认
          </view>
        </view>
      </view> -->
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
const state = ref({
  list: Array.from({ length: 20 }, (_, index) => ({ id: index }))
})

</script>

<style scoped lang="scss">
.login {
  width: 10px;
}
</style>
