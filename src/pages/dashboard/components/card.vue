<template>
  <view class="bg-[#161616BF] rounded-xl my-5 relative">
    <view v-if="show" class="absolute z-10 w-[68px] h-[68px] right-0 top-0">
      <image :src="imgUrl+pass.png" v-if="pass"></image>
      <image :src="passed" v-else></image>
    </view>
    <slot></slot>
  </view>
</template>

<script setup lang='ts'>
import { imgUrl } from '@/utils/config';
import pass from '@/assets/img/common/pass.png'
import passed from '@/assets/img/common/passed.png'

type IProps = {
  show?: boolean
  pass?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  show: false,
  pass: false
})

</script>
