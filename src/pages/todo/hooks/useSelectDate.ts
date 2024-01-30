import dayjs from 'dayjs'
const useSelectDate = () => {


  const date = ref(dayjs().format('YYYY-MM-DD'))

  const dateChange = (e) => {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    date.value=e.detail.value
  }

  return {
    date,
    // startDate,
    // endDate,
    dateChange
  }
}


export {
  useSelectDate
}
