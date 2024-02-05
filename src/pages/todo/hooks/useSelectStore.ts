import { getStoreName } from '@/api/store/index'

const useSelectStore = () => {
  const index = ref(0)
  const change = (e: any) => {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    index.value = e.detail.value
  }

  const storeList = ref<any[]>([])

  async function getStoreNameApi() {
    const res = await getStoreName()
    console.log(res);
    storeList.value = res
  }

  const array = computed(() => storeList.value.map(item => item.name))

  const selectStore = computed(() => storeList.value[index.value])

  onMounted(async () => {
    await getStoreNameApi()
  })


  return {
    change,
    index,
    array,
    selectStore
  }
}


export {
  useSelectStore
}
