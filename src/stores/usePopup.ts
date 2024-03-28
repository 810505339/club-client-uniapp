import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePopup = defineStore('usePopup', () => {
  const popup = ref()
  const isshowPopup = ref(false)
  function open(postion: string) {
    isshowPopup.value = true
    popup.value.open(postion)
  }

  function close() {
    isshowPopup.value = false
    popup.value.close() // 清除弹窗
  }

  onUnmounted(() => {
    close()
  })
  return { popup, open, close, isshowPopup }
})
