import * as echarts from 'echarts';

export default (option: any) => {

  let chart = ref()

  console.log(option, 'option');


  onMounted(() => {
    console.log(chart.value,'chart');

    chart.value.init(echarts, chart => {
      chart.setOption(option);
    });
  })

  return {
    chart,
  }
}
