import { ref } from 'vue'

type IState = {
  params?: any
  load: (params?: any) => Promise<{
    records: any[],
    total: number
  }>
}

const defaultFormData = {
  current: 1,
  size: 10,
  loading: false, //是否正在加载
  finished: false, // 是否全部加载完成
  empty: false,
}

export default function useList(state: Ref<IState>) {

  const formData = ref({ ...defaultFormData })

  const list = ref<any[]>([])

  async function getList() {
    console.log(formData.value);

    formData.value.loading = true
    if (formData.value.finished || formData.value.empty) {
      formData.value.loading = false
      return
    }
    try {
      const res = await state.value.load({ ...formData.value, ...state.value.params })
      list.value = [...list.value, ...res.records]
      formData.value.finished = res.total <= list.value.length
      formData.value.current++

      if (list.value.length === 0) {
        formData.value.empty = true
      }

    } catch (err) {
      formData.value.loading = false
    } finally {
      formData.value.loading = false
    }
  }

  async function refresh() {
    formData.value = { ...defaultFormData }
    console.log(formData.value);

    list.value = []
    console.log(1);

    await getList()
  }

  onMounted(async () => {
    await getList()
  })


  return {
    refresh,
    list,
    getList,
    formData
  }
}
