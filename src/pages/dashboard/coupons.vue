<template>
  <base-view>
    11
  </base-view>
</template>

<script setup lang="ts">
import baseView from '@/components/baseview/index.vue'

onReachBottom(() => {
  console.log(11);

})
</script>
