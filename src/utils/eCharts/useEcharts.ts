import * as echarts from '@/components/lechart/echarts.min.js';

export default (option: any) => {

  let chart = ref()

  console.log(option, 'option');


  onMounted(() => {
    console.log(echarts,'echarts');

    chart.value.init(echarts, chart => {
      chart.setOption(option);
    });
  })

  return {
    chart,
  }
}
