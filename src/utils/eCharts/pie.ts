import * as echarts from '@/static/echarts.min.js';
import { Ref } from "vue";

type IData = Array<{ name: string, value: string }>




const useBarOptions = (opt: any) => {





  const { radius = ['50%', '10%'], legend = {
    top: '5%',
    left: 'center',
    textStyle: {
      color: '#fff'
    },
  }, grid = {
    bottom: '10%'
  }, center = ['50%', '50%'] } = opt






  const setOption = (parmams: IData) => {


    const options: EChartsOption = {
      tooltip: {
        trigger: 'item',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b} : {c} <br/>百分比 : {d}%' //{a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
      },
      legend: legend,
      series: [
        {

          type: 'pie',
          radius: radius,
          center: center,
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 0
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 10,
              fontWeight: 'bold',
              color: '#fff'
            }
          },
          labelLine: {
            show: false
          },
          data: parmams
        }
      ],
      grid: grid
    };

    return options




  }

  return {
    setOption
  }
}


export default useBarOptions
