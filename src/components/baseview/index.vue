<template>
  <view class="h-[100vh] w-[100vw] relative">
    <image :src="img" class="absolute -z-10 inset-0" v-if="showBg" />
    <!-- 自定义导航栏 -->
    <view :style="{ paddingTop: statusBarHeight + 'px' }">
      <!-- 真正的导航栏内容 -->
      <view class="h-12 flex items-center w-full">
        <view class="w-[61px] h-[32px] mx-2.5" v-if="showLogo">
          <image :src="logo" />
        </view>
        <slot name="navBar" />
      </view>
    </view>
    <view class="flex-auto w-full">
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
})

</script>
