<template>
  <base-view :is-scroll="false">
    <view class="p-5">
      <text class="text-xl text-white">数据看板</text>
      <select-input title="选择门店" :icon="dropdown" v-if="array.length > 0">
        <picker :value="index" :range="array" class="w-full " @change="change">
          <view>{{ array[index] }}</view>
        </picker>
      </select-input>

      <selectInput title="选择日期" :icon="dateTime" class="p-0">
        <uni-datetime-picker v-model="range" type="daterange" :clear-icon="false" :border="false">
          <view class="flex items-center">
            <view>{{ range[0] }}</view>
            <view class="mx-4">-</view>
            <view>{{ range[1] }}</view>
          </view>
        </uni-datetime-picker>
      </selectInput>
      <view class="py-5 flex flex-wrap gap-3 items-center" v-if="resList.length > 0">
        <CardItem1 class="w-full" :data="resList[0]" />
        <CardItem2 class="w-full" :data="resList?.[1]" />
        <CardItem3 class="w-full" :data="resList[2]" />
        <CardItem4 class="w-full" :data="resList[3]" />
        <CardItem5 class="w-full" :data="resList[4]" />
        <CardItem6 class="w-full" :data="resList[5]" />
      </view>
    </view>
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'
import selectInput from '@/components/select-input/index.vue'
import { useSelectStore } from '@/pages/todo/hooks/useSelectStore';
import { useSelectDate } from '@/pages/todo/hooks/useSelectDate';
import useEchartData from '@/pages/todo/hooks/useEchartData';
import CardItem1 from '@/pages/todo/components/card/item1.vue'
import CardItem2 from '@/pages/todo/components/card/item2.vue'
import CardItem3 from '@/pages/todo/components/card/item3.vue'
import CardItem4 from '@/pages/todo/components/card/item4.vue'
import CardItem5 from '@/pages/todo/components/card/item5.vue'
import CardItem6 from '@/pages/todo/components/card/item6.vue'
import { imgUrl } from '@/utils/config';
const dropdown = imgUrl + 'dropdown.png'
const dateTime = imgUrl + 'dateTime.png'
// const { t } = useI18n()
const { index, array, change, selectStore } = useSelectStore()
const { range } = useSelectDate()
/* resList所有的请求数据 */
const { getAll, resList } = useEchartData()




watch(() => [selectStore.value, ...range.value], async () => {
  await getAll({
    // storeId: selectStore.value.id,
    // beginDate: range.value[0],
    // endDate: range.value[1]
    storeId: '1729404435416776706',
    beginDate: '2024-02-04',
    endDate: '2024-02-04'
  })

  console.log(resList.value, 'resList');


})


onPageScroll((e) => {
  console.log(e.scrollTop, 111);

})

// 渲染完成
const init = () => {
  console.log("渲染完成");
}
</script>

<style lang="scss">
:deep(.uni-date .uni-date-x) {
  color: white;
}

:deep(.uni-date .uni-date-x) {
  background: transparent;
}

:deep(.uni-date .uni-icons) {
  visibility: hidden;
}
</style>
