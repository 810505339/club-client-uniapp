<template>
  <view>
    <slot></slot>
    <view class="text-white text-center text-xs py-2">
      <view v-if="empty">无数据</view>
      <view v-if="loading">Loading</view>
      <text v-if="finished">暂无更多</text>
    </view>
  </view>
</template>


<script setup lang="ts">

type IProps = {
  loading: boolean;
  finished: boolean;
  empty: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  loading: false,
  finished: false,
  empty: false

})
</script>
