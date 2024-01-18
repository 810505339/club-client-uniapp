<template>
	<view>
		<view style="height: 750rpx; background-color: aquamarine; position: relative">
			<lEchart ref="chart" @finished="init"></lEchart>

		</view>
	</view>
</template>

<script>
// import * as echarts from 'echarts'
// import { onMounted, ref,getCurrentInstance } from 'vue'
// import lEchart from '@/components/lEchart/index.vue'
// const option = {
// 	tooltip: {
// 		trigger: 'axis',
// 		axisPointer: {
// 			type: 'shadow'
// 		},
// 		confine: true
// 	},
// 	legend: {
// 		data: ['热度', '正面', '负面']
// 	},
// 	grid: {
// 		left: 20,
// 		right: 20,
// 		bottom: 15,
// 		top: 40,
// 		containLabel: true
// 	},
// 	xAxis: [
// 		{
// 			type: 'value',
// 			axisLine: {
// 				lineStyle: {
// 					color: '#999999'
// 				}
// 			},
// 			axisLabel: {
// 				color: '#666666'
// 			}
// 		}
// 	],
// 	yAxis: [
// 		{
// 			type: 'category',
// 			axisTick: { show: false },
// 			data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
// 			axisLine: {
// 				lineStyle: {
// 					color: '#999999'
// 				}
// 			},
// 			axisLabel: {
// 				color: '#666666'
// 			}
// 		}
// 	],
// 	series: [
// 		{
// 			name: '热度',
// 			type: 'bar',
// 			label: {
// 				normal: {
// 					show: true,
// 					position: 'inside'
// 				}
// 			},
// 			data: [300, 270, 340, 344, 300, 320, 310],
// 		},
// 		{
// 			name: '正面',
// 			type: 'bar',
// 			stack: '总量',
// 			label: {
// 				normal: {
// 					show: true
// 				}
// 			},
// 			data: [120, 102, 141, 174, 190, 250, 220]
// 		},
// 		{
// 			name: '负面',
// 			type: 'bar',
// 			stack: '总量',
// 			label: {
// 				normal: {
// 					show: true,
// 					position: 'left'
// 				}
// 			},
// 			data: [-20, -32, -21, -34, -90, -130, -110]
// 		}
// 	]
// }
// const dom = ref()
// // 渲染完成
// const init = () => {
// 	console.log("渲染完成");
// }


// onMounted(() => {

// 	console.log(dom.value);

// 	// if (dom.value) {
// 	// 	dom.value.init(echarts, chart => {
// 	// 		chart.setOption(option);
// 	// 	});
// 	// }
// })

export default {

}

</script>
<style>
.customTooltips {
	position: absolute;
	background-color: rgba(255, 255, 255, 0.8);
	padding: 20rpx;
}
</style>
