import dayjs from 'dayjs'
const useSelectDate = () => {
  const now = dayjs().format('YYYY-MM-DD')
  const range = ref([now, now])
  return {
    range,
  }
}


export {
  useSelectDate
}
