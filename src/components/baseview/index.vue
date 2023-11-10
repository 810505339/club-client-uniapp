<template>
  <view class=" w-[100vw] relative bg-[#0b0b0b] overflow-scroll">
    <view class="h-[100vh] w-[100vw] fixed  z-10 inset-0">
      <image :src="img" class="absolute inset-0" v-if="showBg" />
    </view>
    <!-- 自定义导航栏 -->
    <view :style="{ marginTop: statusBarHeight + 'px' }" class="h-12">
      <!-- 真正的导航栏内容 -->
      <view class="h-12 flex items-center w-full fixed z-40">
        <view class="h-8 mx-2.5" v-if="showLogo">
          <image :src="logo" mode="heightFix" />
        </view>
        <slot name="navBar" />
      </view>
    </view>
    <view class="flex">
      <scroll-view scroll-y class="w-full relative z-10 " :style="contextHight" @scroll="scroll">
        <view class="flex items-center absolute top-5 right-5">
          <text class="text-white opacity-75 text-xs  w-20 truncate">UserNameasdasdasdasdasdasdad</text>
          <view class="h-8 w-8 bg-indigo-500 rounded-full"></view>
        </view>
        <slot />
        <!-- <custom-tab-bar direction="horizontal" :show-icon="false" :selected="selected" @onTabItemTap="onTabItemTap" /> -->
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, withDefaults, CSSProperties } from 'vue';
import bg from '@/assets/img/base/bg.png'
import logo from '@/assets/img/login/logo.png'
type IProps = {
  img?: string;
  showBg?: boolean;
  showLogo?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  img: bg,
  showBg: true,
  showLogo: true
})
const statusBarHeight = ref(0);
const selected = ref(0);
function onTabItemTap({ pagePath }: { pagePath: string }) {

  uni.navigateTo({
    url: pagePath
  })
}

const contextHight = computed(() => {
  return {
    height: `calc(100vh - ${48 + statusBarHeight.value}px)`
  }
})

onMounted(() => {
  statusBarHeight.value = uni.getSystemInfoSync()['statusBarHeight']!;
  uni.$on('onPageScroll', (data) => {
    console.log('滚动', data);
  })
})

onPageScroll(() => {
  console.log(1);

})

const scroll = () => {
  console.log(1);

}


</script>
