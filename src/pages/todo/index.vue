<template>
  <base-view>
    <view class="p-5">
      <text class="text-xl text-white">{{ t('dashboard.text') }}</text>
      <text class="text-xl text-white">{{ t('dashboard.text') }}</text>
      <lechart ref="btn" class="w-10 h-10 bg-orange-600" />
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import lechart from '@/components/lechart/index.vue'
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts';
const { t } = useI18n()

const btn = ref()
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    confine: true
  },
  legend: {
    data: ['热度', '正面', '负面']
  },
  grid: {
    left: 20,
    right: 20,
    bottom: 15,
    top: 40,
    containLabel: true
  },
  xAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#999999'
        }
      },
      axisLabel: {
        color: '#666666'
      }
    }
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
      axisLine: {
        lineStyle: {
          color: '#999999'
        }
      },
      axisLabel: {
        color: '#666666'
      }
    }
  ],
  series: [
    {
      name: '热度',
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'inside'
        }
      },
      data: [300, 270, 340, 344, 300, 320, 310],
    },
    {
      name: '正面',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true
        }
      },
      data: [120, 102, 141, 174, 190, 250, 220]
    },
    {
      name: '负面',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'left'
        }
      },
      data: [-20, -32, -21, -34, -90, -130, -110]
    }
  ]
}

onMounted(() => {
  console.log(btn);
  btn.value.init(echarts, chart => {
    chart.setOption(option);
  })
})
</script>
