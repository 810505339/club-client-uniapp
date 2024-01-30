const useSelectStore = () => {
  const index = ref(0)
  const array = [
    "篮球",
    "足球",
    "羽毛球"
  ]
  const change = (e) => {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    index.value = e.detail.value
  }

  return {
    change,
    index,
    array
  }
}


export  {
  useSelectStore
}
