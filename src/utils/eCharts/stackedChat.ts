import { EChartsOption } from "echarts";
import * as echarts from 'echarts';
import { Ref, onMounted } from 'vue'


type YData = Array<{ name: string, data: any[] }>
type XData = Array<string>

type IParams = {
  xData: XData
  yData: YData
}
/* 
  yData:[{name:'xx',data:[1,2,4,5]}]
*/
export const useStackedChatOptions = () => {


  

 

  const setOption = (parmams: IParams) => {
  

    const series = computed(() => {

      return parmams.yData.map((y) => {
        return {
          ...y,
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            // opacity: 0.8,
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //   {
            //     offset: 0,
            //     color: 'rgb(55, 162, 255)'
            //   },
            //   {
            //     offset: 1,
            //     color: 'rgb(116, 21, 219)'
            //   }
            // ])
          },
          emphasis: {
            focus: 'series'
          },
        }
      })
    })
  

    const options: EChartsOption = {

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        show: false
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: false
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: parmams.xData,
          show: false
        }

      ],
      yAxis: [
        {
          type: 'value',
          show: false
        }
      ],
      series: series.value
    };
    console.log(options, 'options');

    return options
  }

  return {
    setOption
  }


}


