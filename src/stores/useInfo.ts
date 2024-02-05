import { loginApi, getCommonFileUrl, getUserInfo } from '@/api/login';
import { defineStore, } from 'pinia'
import { ref } from 'vue'

export const useUserInfo = defineStore('useUserInfo', () => {


	const userInfo = ref({
		userName: '',
		photo: '',
		// time: 0,
		// roles: [],
		// authBtnList: [],
		fileCommonUrl: ''
	})

	onMounted(async () => {
		const userInfo_ = await uni.getStorageSync('token')
		userInfo.value = { ...userInfo_ }
	})

	const fileUrl = computed(() => userInfo.value.fileCommonUrl)


	async function handleLogin(data: any) {
		data.grant_type = 'password';
		data.scope = 'server';
		const { access_token, refresh_token } = await loginApi(data)

		/* 设置头像跟名称 */
		await setUserInfo()


		/* 登录储存token和用户信息 */
		uni.setStorageSync('token', {
			...userInfo.value,
			access_token,
			refresh_token,
		})


		/* 登录成功跳转 */

		uni.switchTab({
			url: '/pages/home/index'
		})


	}

	async function setUserInfo() {
		const res = await getUserInfo()
		const url = await getCommonFileUrl()
		userInfo.value = {
			fileCommonUrl: url,
			photo: url + res.sysUser?.avatar,
			userName: res.sysUser?.name
		}
	}





	return { userInfo, handleLogin, fileUrl }
})
