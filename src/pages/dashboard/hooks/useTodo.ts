import { usePopup } from "@/stores/usePopup";

export default (api: (params: any) => Promise<any>, refresh: () => void) => {
  const clickItem = ref<any>()
  const store = usePopup()

  function handleClick(item: any) {
    clickItem.value = item
    store.open('center')

  }

  async function disagree(value: string) {
    console.log(value);
    await handleCheck(value, 'REJECT')


  }

  async function agree(value: string) {
    console.log(value);
    await handleCheck(value, 'PASS')

  }

  async function handleCheck(remark: string, auditAction: string) {
    if (!remark) {
      uni.showToast({
        icon: 'none',
        title: '请输入审核说明'
      })
      return
    }

    if (clickItem.value) {
      console.log(clickItem);
      const res = await api({
        id: clickItem.value.id,
        reqDTO: {
          taskId: clickItem.value.taskId,
          auditAction,
          remark,
        }
      })

      console.log(res, 'res');



      if (res.success) {
        store.close()
        refresh()
      }



    }



  }

  return {
    handleClick,
    agree,
    disagree,
    clickItem
  }
}
