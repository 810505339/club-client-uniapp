import { todayCheckNumber } from '@/api/ticket'
export default function () {
  const number = ref()
  async function api() {
    const res = await todayCheckNumber()
    number.value = res
  }

  onMounted(async () => {
    await api()
  })
  return {
    number
  }
}
