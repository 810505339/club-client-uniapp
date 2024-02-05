import { baseRequest } from '../base';
export const getStoreName = async () => {
  const { data } = await baseRequest({
    url: "/admin/store/storeNameList",
    method: 'GET',
  })
  return data.data
}
