<script setup lang="ts">

import { intercept } from '@/api/base'
onLaunch(() => {
  intercept()
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})

</script>

<style lang="scss">
@import "uview-plus/index.scss";
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

uni-image {
  width: 100% !important;
  height: 100% !important;
}

image {
  width: 100%;
  height: 100%;
}

button::after {
  border: none !important;
}

.border {
  border: 1px solid;
}

view {
  color: white;
}
</style>
