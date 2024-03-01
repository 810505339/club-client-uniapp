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
          <image :src="imgUrl + 'logo.png'" mode="heightFix" />
        </view>
        <slot name="navBar" />
      </view>
    </view>
    <view class="flex relative z-10">

      <scroll-view scroll-y :scroll-top="scrollTop.new" class="w-full relative z-10 " :style="contextHight"
        @scrolltolower="scrolltolower" :refresher-enabled="refresherEnabled" :refresher-triggered="refresher"
        @refresherrefresh="refresherrefresh" @scroll="scroll" :scroll-with-animation="true" v-if="isScroll">
        <user />
        <slot />
      </scroll-view>
      <view class="w-full " v-else>
        <user />
        <slot />
      </view>
    </view>
    <scroll-top-icon @click="goTop" v-show="scrollTop.old > 50" />
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, withDefaults, CSSProperties } from 'vue';
import scrollTopIcon from './scroll-top.vue';
import { usePopup } from '@/stores/usePopup';
import user from './user.vue'
import { imgUrl } from '@/utils/config';
type IProps = {
  img?: string;
  showBg?: boolean;
  showLogo?: boolean;
  showPopup?: boolean;
  refresherEnabled?: boolean;
  refresher?: boolean;
  isScroll?: boolean;
}

const store = usePopup()
const { popup } = storeToRefs(store)


const props = withDefaults(defineProps<IProps>(), {
  img: imgUrl + 'bg.png',
  showBg: true,
  showLogo: true,
  showPopup: false,
  refresherEnabled: false,
  refresher: false,
  isScroll: true
})
const emit = defineEmits(['refresh', 'loadMore'])

const statusBarHeight = ref(0);



const refresher = ref(false);
const scrollTop = ref({
  new: 0,
  old: 0
});


const contextHight = computed(() => {
  return {
    height: `calc(100vh - ${48 + statusBarHeight.value}px)`
  }
})

onMounted(() => {
  statusBarHeight.value = uni.getSystemInfoSync()['statusBarHeight']!;

})

/* 加载到底部 */
const scrolltolower = () => {

  emit('loadMore')

}

const refresherrefresh = async () => {
  refresher.value = true;
  await emit('refresh')
  refresher.value = false;
}

// onPageScroll((e) => {
//   console.log(e.scrollTop, 111);

// })

const scroll = (e) => {
  scrollTop.value.old = e.detail.scrollTop
}

const goTop = () => {
  scrollTop.value.new = scrollTop.value.old
  nextTick(() => {
    scrollTop.value.new = 0;
  })
}


</script>
