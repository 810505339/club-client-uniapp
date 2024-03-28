<template>
  <view class="bg-[rgba(22,22,22,0.75)] rounded-xl my-5 relative">
    <view v-if="show" class="absolute z-10 w-[68px] h-[68px] right-0 top-0">
      <image :src="imgUrl + 'pass.png'" v-if="pass"></image>
      <image :src="imgUrl + 'passed.png'" v-else></image>
    </view>
    <slot></slot>
  </view>
</template>

<script setup lang='ts'>
import { imgUrl } from '@/utils/config';


type IProps = {
  show?: boolean
  pass?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  show: false,
  pass: false
})

</script>
