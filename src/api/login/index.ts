import { btoa } from 'js-base64';
import { encryption, generateUUID } from '@/utils/other'
import qs from 'qs';
import { baseRequest } from '../base';

// /**
//  * https://www.ietf.org/rfc/rfc6749.txt
//  * OAuth 协议 4.3.1 要求格式为 form 而不是 JSON 注意！
//  */
// const FORM_CONTENT_TYPE = 'application/x-www-form-urlencoded';
const BASICAUTH = 'club:club';
const FORM_CONTENT_TYPE = 'application/x-www-form-urlencoded';
// type IData = {
// 	[key in string]: string
// }

// //登录

export const loginApi = async ({ username, grant_type = 'mobile', scope = 'server', randomStr, code, password }: IData) => {
    const basicAuth = 'Basic ' + btoa(BASICAUTH);
    let encPassword = password;
    // 密码加密
    if (import.meta.env.VITE_PWD_ENC_KEY) {
        encPassword = encryption(encPassword, import.meta.env.VITE_PWD_ENC_KEY);
    }
    const params = qs.stringify({ username, randomStr: generateUUID(), code, grant_type, scope });

    const { data } = await baseRequest({
        url: `/auth/oauth2/token?${params}`, //仅为示例，并非真实接口地址。
        method: "POST",
        data: {
            password: encPassword
        },
        header: {
            skipToken: 'true',
            Authorization: basicAuth,
            'Content-Type': FORM_CONTENT_TYPE,
        },
    })

    return data



};

export const getUserInfo = async () => {
    const { data } = await baseRequest({
        url: `/admin/user/info`, //仅为示例，并非真实接口地址。
        method: "GET",
    })

    return data.data
}

export const getCommonFileUrl = async () => {
    const { data } = await baseRequest({
        url: '/admin/sys-file/access/common',
        method: 'GET',
    })

    return data.data
}


// //发送客户登录验证码
// export const sendYzmApi = (mobile: string) => {
// 	return service({
// 		url: `/admin/mobile/customer_login`,
// 		params: {
// 			id: 1
// 		}
// 	});
// };


// // 参数接口
// export interface EditSelfParams {
// 	/*头像文件id */
// 	avatarFileId: number;

// 	/*昵称 */
// 	nickname: string;

// 	/*生日 */
// 	birthday: string;
// }


// /**
//  * 修改个人信息（用户操作）
//  * @param {object} params 修改个人信息（用户操作）
//  * @param {number} params.avatarFileId 头像文件id
//  * @param {string} params.nickname 昵称
//  * @param {object} params.birthday 生日
//  * @returns
//  */
// export const editUserInfoApi = (data: EditSelfParams) => {
// 	return service({
// 		url: '/admin/customer/edit-self',
// 		method: 'put',
// 		data,
// 	});
// };

