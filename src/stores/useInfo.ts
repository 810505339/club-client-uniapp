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
		fileCommonUrl: '',
		access_token: '',
		refresh_token: ''
	})

	onMounted(async () => {
		const userInfo_ = await uni.getStorageSync('token')
		console.log(userInfo_, 'userinfo_');

		userInfo.value = { ...userInfo_ }
	})

	const fileUrl = computed(() => userInfo.value.fileCommonUrl)


	async function handleLogin(data: any) {
		data.grant_type = 'password';
		data.scope = 'server';

		try {
			const res = await loginApi(data)
			if (res.access_token) {
				/* 登录储存token和用户信息 */
				uni.setStorageSync('token', {
					access_token: res.access_token,
					refresh_token: res.refresh_token,
				})

				console.log(1)

				/* 设置头像跟名称 */
				await setUserInfo()

				/* 登录成功跳转 */
				uni.switchTab({
					url: '/tabs/home'
				})

			}





		} catch (e) {
			console.log(e)
		}



	}

	async function setUserInfo() {
		const res = await getUserInfo()
		const url = await getCommonFileUrl()
		userInfo.value = {
			fileCommonUrl: url,
			photo: url + '/' + res.sysUser?.avatar,
			userName: res.sysUser?.username
		}
	}





	return { userInfo, handleLogin, fileUrl, setUserInfo }
})
