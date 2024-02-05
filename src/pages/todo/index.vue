<template>
  <base-view>
    <view class="p-5">
      <!-- <text class="text-xl text-white">数据看板</text> -->
      <!-- <selectInput title="选择门店" :icon="dropdown">
        <picker :value="index" :range="array" class="w-full" @change="change">
          <view>{{ array[index] }}</view>
        </picker>
      </selectInput>

      <selectInput title="选择日期" :icon="dateTime">
        <view @click="click" class="w-full">11</view>
      </selectInput> -->

    
    </view>

  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
// import selectInput from '@/components/selectInput/index.vue'
// import lechart from '@/components/lechart/index.vue'
// import { useI18n } from 'vue-i18n';
// import { onMounted, ref } from 'vue'
// import * as echarts from 'echarts';
// import dropdown from '@/assets/img/common/dropdown.png'
// import dateTime from '@/assets/img/common/dateTime.png'
// import { useSelectStore } from './hooks/useSelectStore';
// import { useSelectDate } from './hooks/useSelectDate';
// import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
// import datePicker from './components/datePicker.vue';

// const { t } = useI18n()
// const { index, array, change } = useSelectStore()
// const { date, startDate, endDate, dateChange } = useSelectDate()
// const pickerView = ref()

// onMounted(() => {
//   console.log(btn);
//   btn.value.init(echarts, chart => {
//     chart.setOption(option);
//   })
// })

const changeLog = (e) => {
  console.log('change事件:', e);
}

const click = () => {
  console.log(pickerView.value)
  pickerView.value.open('bottom')
}
</script>
