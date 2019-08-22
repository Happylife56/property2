<template>
  <view class="family-auth">
    <!-- 家人授权 -->
    <common></common>
  </view>
</template>

<script>
import common from '@/components/common.vue'
export default {
  components: { common }
}
</script>

<style scoped>
.family-auth {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>