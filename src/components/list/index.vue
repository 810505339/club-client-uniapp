<template>
  <view>
    <slot></slot>
    <view class="text-white text-center text-xs py-2 flex items-center justify-center">

     
      <view v-if="empty">无数据</view>
      <view class="w-6 h-6" v-if="loading">
        <image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjYwIiBzdHJva2UtZGFzaG9mZnNldD0iNjAiIHN0cm9rZS1vcGFjaXR5PSIuMyIgZD0iTTEyIDNDMTYuOTcwNiAzIDIxIDcuMDI5NDQgMjEgMTJDMjEgMTYuOTcwNiAxNi45NzA2IDIxIDEyIDIxQzcuMDI5NDQgMjEgMyAxNi45NzA2IDMgMTJDMyA3LjAyOTQ0IDcuMDI5NDQgMyAxMiAzWiI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZHVyPSIxLjNzIiB2YWx1ZXM9IjYwOzAiLz48L3BhdGg+PHBhdGggc3Ryb2tlLWRhc2hhcnJheT0iMTUiIHN0cm9rZS1kYXNob2Zmc2V0PSIxNSIgZD0iTTEyIDNDMTYuOTcwNiAzIDIxIDcuMDI5NDQgMjEgMTIiPjxhbmltYXRlIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLWRhc2hvZmZzZXQiIGR1cj0iMC4zcyIgdmFsdWVzPSIxNTswIi8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiBkdXI9IjEuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCAxMiAxMjszNjAgMTIgMTIiLz48L3BhdGg+PC9nPjwvc3ZnPg==">
        </image>
      </view>
      <text v-if="finished">暂无更多</text>
    </view>
  </view>
</template>


<script setup lang="ts">

type IProps = {
  loading: boolean;
  finished: boolean;
  empty: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  loading: false,
  finished: false,
  empty: false

})
</script>
