
// import axios from 'axios';
// const baseUrl = import.meta.env.VITE_ADMIN_PROXY_PATH
const baseUrl = 'https://club-h5.point2club.com:30000/club-gateway/'
console.log(baseUrl);

enum CODELIST {
	TOKENCAN = '424',

}


// /**
//  * 创建并配置一个 Axios 实例对象
//  */
// const service = axios.create({
// 	baseURL: baseUrl,
// 	timeout: 50000, // 全局超时时间
// 	headers: {
// 		'Content-Type': 'application/json',
// 		"Accept": "application/json, text/plain, */*"
// 	},
// 	// adapter: UniAdapter, // 指定适配器
// });

// /**
//  * Axios请求拦截器，对请求进行处理
//  * 1. 序列化get请求参数
//  * 2. 统一增加Authorization和TENANT-ID请求头
//  * 3. 自动适配单体、微服务架构不同的URL
//  * @param config AxiosRequestConfig对象，包含请求配置信息
//  */
// service.interceptors.request.use(async (config) => {
// 	// 统一增加Authorization请求头, skipToken 跳过增加token

// 	let token = null;
// 	// if (generic) {
// 	// 	token = generic.password;
// 	// }
// 	// console.log(token, 'token');

// 	if (token && !config.headers?.skipToken) {
// 		config.headers![CommonHeaderEnum.AUTHORIZATION] = `Bearer ${token}`;
// 	}

// 	// 请求报文加密
// 	// 处理完毕，返回config对象
// 	return config;
// },
// 	(error) => {
// 		// 对请求错误进行处理
// 		console.log(error, 'error');

// 		return Promise.reject(error);
// 	}
// );

// /**
//  * 响应拦截器处理函数
//  * @param response 响应结果
//  * @returns 如果响应成功，则返回响应的data属性；否则，抛出错误或者执行其他操作
//  */
// // const handleResponse = (response) => {
// // 	if (response.data.code === 1) {
// // 		throw response.data;
// // 	}

// // 	// // 针对密文返回解密
// // 	// if (response.data.encryption) {
// // 	// 	const originData = JSON.parse(other.decryption(response.data.encryption, import.meta.env.VITE_PWD_ENC_KEY));
// // 	// 	response.data = originData;
// // 	// 	return response.data;
// // 	// }



// // 	return response.data;
// // };

// /**
//  * 添加 Axios 的响应拦截器，用于全局响应结果处理
//  */
// service.interceptors.response.use((response) => {
// 	const data = response.data;

// 	// if (!data.success) {
// 	// 	Toast.show({ text1: data?.msg });
// 	// }

// 	return response;

// }, (error) => {
// 	console.log(error);

// 	const data = error.response.data;

// 	// if (data) {
// 	// 	Toast.show({ text1: data?.msg });
// 	// }

// });

// // 常用header
// export enum CommonHeaderEnum {
// 	'TENANT_ID' = 'TENANT-ID',
// 	'ENC_FLAG' = 'Enc-Flag',
// 	'AUTHORIZATION' = 'Authorization',
// }

// // 导出 axios 实例
// export default service;


function intercept() {
	uni.addInterceptor('request', {
		invoke(args: any) {
			// request 触发前拼接 url 
			/* 获取token */

			const token = uni.getStorageSync('token')



			args.url = baseUrl + args.url

			if (args.header?.skipToken == 'true') {
				return
			}



			args.header = {
				...args.header,
				Authorization: `Bearer ${token.access_token}`
			}

			// console.log(args.header);








		},
		success(args: any) {
			// // 请求成功后，修改code值为1
			// args.data.code = 1
			return args.data
		},
		returnValue(args: any) {
			return args.data
		},
		fail(err: any) {
			console.log('interceptor-fail', err)
		},
		complete(res: any) {

			if (res?.data?.access_token) {
				return res
			} else {
				if (!res?.data?.success) {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000
					})
				}
			}

			if (res.statusCode == CODELIST.TOKENCAN) {
				uni.navigateTo({
					url: "/pages/login/index"
				})
			}
		}
	})
}



type IBaseRequestOption = {
	msg?: boolean
}

async function baseRequest(params: UniNamespace.RequestOptions, option?: IBaseRequestOption): Promise<{ data: any }> {
	return new Promise((resolve, reject) => {
		uni.request({
			...params,
			success: (res) => {


				resolve(res)
			},
			fail: (err) => {
				reject(err)
			},
			complete: (res: any) => {
				if (res.data.success && option?.msg) {
					/* 全局默认操作成功 */
					uni.showToast({
						title: '操作成功',
						icon: 'none',
						duration: 2000
					})
				}

			}
		});
	})
}

export {
	intercept,
	baseRequest
}
