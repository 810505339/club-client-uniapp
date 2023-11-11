import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePopup = defineStore('usePopup', () => {
  const popup = ref()
  function open(postion: string) {
    popup.value.open(postion)
  }

  return { popup, open }
})
