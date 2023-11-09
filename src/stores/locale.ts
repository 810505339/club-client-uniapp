import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLocale = defineStore('locale', () => {
  const locale = ref('en')
  const setLocale = (l: string) => {
    locale.value = l
  }


  return {
    locale,
    setLocale
  }
})
