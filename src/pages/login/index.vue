<template>
  <view class="h-[100vh] w-[100vw] fixed  z-10 inset-0">
    <image :src="bg" class="absolute inset-0" />



    <view class="absolute left-5 right-5  top-1/2 -translate-y-1/2">
      <view class=" z-0  h-11 flex flex-row items-center  mb-5">
        <view class="w-[61px] h-[32px] mx-2.5">
          <image :src="logo" />
        </view>
        <view>
          <text class="text-4xl text-white">{{ t('login.title') }}</text>
        </view>
      </view>
      <view class="rounded-3xl z-0 bg-[#222222BF] h-60 p-5 flex-col justify-between overflow-hidden ">
        <view class="rounded-xl bg-[#191919FF]">
          <input class="h-[50px] text-[#FFFFFFFF] text-xs px-4 " type="text" focus placeholder="请输入您的账号"
            v-model="loginData.username" />
          <view class="border-[#ffffff19] border-b h-[1px]"></view>
          <view class="flex flex-row items-center">
            <input type="text" class=" h-[50px] text-[#FFFFFFFF] text-xs px-4 flex-auto" placeholder="请输入您的密码"
              v-model="loginData.password" :password="!showPassword" />
            <view @click="onChangeshowPassword" class="mr-2">
              <uni-icons :type="passwordIcon" size="20" />
            </view>
          </view>


        </view>
        <view class="flex flex-row items-center justify-center h-10">
          <text class="text-white opacity-50 text-xs">{{ t('login.text') }}</text>
        </view>
        <view class="flex-grow-1 mt-auto flex">
          <button @click="toNext"
            class="rounded-3xl bg-[#EE2737FF] h-10 w-full text-[#0C0C0C] text-base flex items-center justify-center">{{
              t('login.login') }}</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import logo from '@/assets/img/login/logo.png'
import bg from '@/assets/img/login/bg.png'
import { useI18n } from 'vue-i18n';
import { useUserInfo } from '@/stores/useInfo'
import { sendYzmApi } from '@/api/login';


/* ref */
const { t } = useI18n()
const showPassword = ref(false)
const store = useUserInfo()
const { userInfo } = storeToRefs(store)



const loginData = ref({
  username: 'admin', // 用户名
  password: 'club.2023!!!', // 密码
  code: '', // 验证码
  randomStr: '', // 验证码随机数 
})


/* computed */
const passwordIcon = computed(() => {
  return showPassword.value ? 'eye-slash-filled' : 'eye-filled'
})


/* fun */
/* 改变查看密码 */
function onChangeshowPassword() {
  showPassword.value = !showPassword.value
}

/* 登录跳转 */
async function toNext() {


  store.handleLogin(loginData.value)
  // uni.switchTab({
  //   url: '/pages/home/index'
  // })
  // store.handleLogin(loginData.value)
}

</script>

<style scoped lang="scss">
:deep(.uni-input) {
  height: 100px;

  .uni-input-wrapper {


    .uni-input-placeholder {
      left: auto;
    }
  }
}

image {
  width: 100%;
  height: 100%;
}
</style>

