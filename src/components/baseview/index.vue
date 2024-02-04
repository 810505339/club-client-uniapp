<template>
  <view class=" w-[100vw] relative bg-[#0b0b0b] overflow-scroll">
    <view catchtouchmove="true" v-if="showPopup">
      <uni-popup ref="popup" type="center">
        <slot name="popup" />
      </uni-popup>
    </view>
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
      <scroll-view scroll-y class="w-full relative z-10 " :style="contextHight" @scrolltolower="scrolltolower"
        :refresher-enabled="refresherEnabled" :refresher-triggered="refresher" @refresherrefresh="refresherrefresh">
        <user />
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
import { usePopup } from '@/stores/usePopup';
import user from './user.vue'
type IProps = {
  img?: string;
  showBg?: boolean;
  showLogo?: boolean;
  showPopup?: boolean;
  refresherEnabled?: boolean;
  refresher?: boolean
}

const store = usePopup()
const { popup } = storeToRefs(store)


const props = withDefaults(defineProps<IProps>(), {
  img: bg,
  showBg: true,
  showLogo: true,
  showPopup: false,
  refresherEnabled: false,
  refresher: false,
})
const emit = defineEmits(['refresh', 'loadMore'])

const statusBarHeight = ref(0);



const refresher = ref(false);

const contextHight = computed(() => {
  return {
    height: `calc(100vh - ${48 + statusBarHeight.value}px)`
  }
})

onMounted(() => {
  statusBarHeight.value = uni.getSystemInfoSync()['statusBarHeight']!;

})


const scrolltolower = () => {
  console.log(refresher);
  emit('loadMore')

}

const refresherrefresh = async () => {
  refresher.value = true;
  await emit('refresh')
  refresher.value = false;
}


</script>
