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



      <!-- <div class="py-10">
          <div class="flex h-[320px] gap-6">
            <div class="w-1/3 rounded-3xl bg-[#72AA3D80]  text-[#CAF16CFF] p-6 flex flex-col relative">
              <img :src="cardIcon1" class="absolute z-10 right-5 top-10" />
              <header class="text-base font-semibold">订单及流水统计</header>
              <div class="text-xs font-semibold">订单总量 <span class="text-white text-2xl ml-2">{{
                resList[0]?.orderTotalCount }}</span> </div>
              <div class="text-xs font-semibold">流水总计 <span class="text-white text-2xl ml-2">{{
                resList[0]?.saleTotalAmount }}</span></div>
              <div ref="dom" class="flex-auto"></div>
            </div>
            <div class="w-1/3 rounded-3xl bg-[#CB7B2480] py-6  text-[#EBB77FFF] flex flex-col relative">
              <img :src="cardIcon2" class="absolute z-10 right-5 top-10" />
              <header class="text-base font-semibold px-6">酒水套餐排行榜</header>
              <el-scrollbar>
                <div class="mt-5 px-6">
                  <div v-for="item, index in resList[1]" :key="item" class="flex justify-center items-center">
                    <span
                      class="bg-[#EBB77F]  h-4 py-1 px-1.5 rounded-lg flex items-center   text-[#000000] text-xs">No.{{
                        index + 1
                      }}</span>
                    <div class="flex-auto ml-4">
                      <div class="truncate">{{ item.drinksMealName }}</div>
                    </div>
                    <span class="flex-shrink-0 font-bold text-lg text-white ml-4">$ {{ item.amount }}</span>
                  </div>
                </div>
              </el-scrollbar>

            </div>
            <div class="w-1/3 rounded-3xl bg-[#3F4FD780] p-6 text-[#D5DFFFFF] flex flex-col relative">
              <img :src="cardIcon3" class="absolute z-10 right-5 top-10" />
              <header class="text-base font-semibold">区域偏好数据</header>
              <div class="mt-5">
                <div class="text-xs">数据来源：用户预订卡座、拼酒局时选择的区域</div>
              </div>
              <div ref="dom3" class="flex-auto"></div>
            </div>
          </div>
          <div class="flex h-[320px] gap-6 mt-5">
            <div class="w-1/3 rounded-3xl bg-[#8645BD80] p-6 text-[#E6C9FFFF] flex flex-col relative">
              <img :src="cardIcon4" class="absolute z-10 right-5 top-10" />
              <header class="text-base font-semibold">用户性别、年龄占比</header>
              <div class="text-xs flex items-center justify-between mt-2.5">
                <span>用户性别构成</span>
                <span>共计:{{ resList[3]?.customerTotalCount }}人</span>
              </div>
              <div ref="sexDom" class="h-20 w-full"></div>
              <div ref="dom4" class="flex-auto" />

            </div>
            <div class="w-1/3 rounded-3xl bg-[#BB2B5D80] p-6 text-[#FEB6CBFF] flex flex-col relative">
              <img :src="cardIcon5" class="absolute z-10 right-5 top-10" />
              <header class="text-base font-semibold">用户来店方式占比</header>
              <div ref="dom5" class="flex-auto"></div>
            </div>
            <div class="w-1/3 rounded-3xl bg-[#278BA880]  p-6 flex text=[#98DCEAFF] flex-col relative">
              <img :src="cardIcon6" class="absolute z-10 right-5 top-10" />
              <header class="text-base font-semibold">拼酒局数据概况</header>
              <div class="text-xs font-semibold">拼酒局总次数 <span class="text-white text-2xl ml-2">{{
                resList[5]?.winePartyTotalCount }}</span> </div>
              <div class="text-xs font-semibold">拼酒局成功率 <span class="text-white text-2xl ml-2">{{
                resList[5]?.successRateTotal }}</span></div>
              <div ref="dom6" class="flex-auto"></div>
            </div>
          </div>
        </div> -->

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
import lechart from '@/components/lechart/index.vue'
// import { useI18n } from 'vue-i18n';
import * as echarts from 'echarts';
import dropdown from '@/assets/img/common/dropdown.png'
import dateTime from '@/assets/img/common/dateTime.png'
import { useSelectStore } from './hooks/useSelectStore';
import { useSelectDate } from './hooks/useSelectDate';
import useEchartData from './hooks/useEchartData';
import CardItem1 from './components/card/item1.vue'
import CardItem2 from './components/card/item2.vue'
import CardItem3 from './components/card/item3.vue'
import CardItem4 from './components/card/item4.vue'
import CardItem5 from './components/card/item5.vue'
import CardItem6 from './components/card/item6.vue'
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
