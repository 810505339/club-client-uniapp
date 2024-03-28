<template>
  <view class=" w-[100vw] relative bg-[#0b0b0b] overflow-scroll">
    <view catchtouchmove="true">
      <uni-popup ref="popup" type="center">
        <user-out v-if="userRef" v-model:userRef="userRef" />
        <slot name="popup" />
      </uni-popup>
    </view>
    <view class="h-[100vh] w-[100vw] fixed  z-10 inset-0">
      <image :src="img" class="absolute inset-0" v-if="showBg" />
    </view>
    <!-- 自定义导航栏 -->
    <!-- 真正的导航栏内容 -->
    <view :style="{ paddingTop: statusBarHeight + 'px' }" class="h-24  flex items-center w-full fixed z-40"
      :class="{ 'bg-navbar': scrollTop.old > 50 }">
      <view class="h-8 mx-2.5" v-if="showLogo">
        <image :src="imgUrl + 'logo.png'" mode="heightFix" />
      </view>
      <slot name="navBar" />
    </view>
    <view class="flex relative z-10 pt-24">

      <scroll-view scroll-y :scroll-top="scrollTop.new" class="w-full relative z-10 " :style="contextHight"
        @scrolltolower="scrolltolower" :refresher-enabled="refresherEnabled" :refresher-triggered="refresher"
        @refresherrefresh="refresherrefresh" @scroll="scroll" :scroll-with-animation="true" v-if="isScroll">
        <user @click="userClick" />
        <slot />
      </scroll-view>
      <view class="w-full relative " v-else>
        <user @click="userClick" />
        <slot />
      </view>
    </view>
    <scroll-top-icon @click="goTop" v-show="scrollTop.old > 50" />
    <!-- <up-back-top :scroll-top="scrollTop.old"></up-back-top> -->
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, withDefaults, CSSProperties } from 'vue';
import userOut from './user-out.vue'
import scrollTopIcon from './scroll-top.vue';
import { usePopup } from '@/stores/usePopup';
import user from './user.vue'
import { imgUrl } from '@/utils/config';
import useCheckupdate from '@/hooks/useCheckupdate'
/* 检测版本跟新 */
useCheckupdate()

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
    height: `calc(100vh - ${80 + statusBarHeight.value}px)`

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

onPageScroll((e) => {
  scrollTop.value.old = e.scrollTop
  console.log(e.scrollTop, 111);

})

const scroll = (e) => {
  scrollTop.value.old = e.detail.scrollTop
}

const goTop = () => {
  /* 如果是scroll-view */
  if (props.isScroll) {
    scrollTop.value.new = scrollTop.value.old
    nextTick(() => {
      scrollTop.value.new = 0;
    })
  }


  uni.pageScrollTo({
    scrollTop: 0,   // 滚动到页面的目标位置  这个是滚动到顶部, 0 
    duration: 300  // 滚动动画的时长
  })

}

const userRef = ref(false)
/* 点击用户弹窗 */
const userClick = () => {
  store.open('center')
  userRef.value = true;
}

</script>
<style scoped lang="scss">
.bg-navbar {
  background-color: #47070C;
}
</style>
