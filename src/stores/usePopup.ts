import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePopup = defineStore('usePopup', () => {
  const popup = ref()
  function open(postion: string) {
    popup.value.open(postion)
  }

  function close() {
    popup.value.close() // 清除弹窗
  }

  onUnmounted(() => {
    close()
  })
  return { popup, open, close }
})
