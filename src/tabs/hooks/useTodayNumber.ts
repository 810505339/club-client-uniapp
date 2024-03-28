import { todayCheckNumber } from '@/api/ticket'
export default function () {
  const number = ref(0)
  async function api() {
    const res = await todayCheckNumber()
    number.value = res ?? 0
  }

  onMounted(async () => {
    await api()
  })
  return {
    number
  }
}
