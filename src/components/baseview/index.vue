<template>
  <view class="h-[100vh] w-[100vw] relative bg-[#0b0b0b] overflow-scroll">
    <view class="h-[100vh] w-[100vw] fixed">
      <image :src="img" class="absolute z-10 inset-0" v-if="showBg" />
    </view>
    <!-- 自定义导航栏 -->
    <view :style="{ marginTop: statusBarHeight + 'px' }" class="h-12">
      <!-- 真正的导航栏内容 -->
      <view class="h-12 flex items-center w-full fixed">
        <view class="h-8 mx-2.5 relative z-40" v-if="showLogo">
          <image :src="logo" mode="heightFix" />
        </view>
        <slot name="navBar" />
      </view>
    </view>
    <view class="flex-auto w-full absolute z-20 ">
      <slot />
      <!-- <custom-tab-bar direction="horizontal" :show-icon="false" :selected="selected" @onTabItemTap="onTabItemTap" /> -->
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, withDefaults } from 'vue';
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

onMounted(() => {
  statusBarHeight.value = uni.getSystemInfoSync()['statusBarHeight']!;
  uni.$on('onPageScroll', (data) => {
    console.log('滚动', data);

  })
})


</script>
