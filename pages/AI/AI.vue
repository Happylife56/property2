<template>
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="contenter">
      <APPHeader>
        <template #title>
          <view class="bg-white">智能家居</view>
        </template>
      </APPHeader>
      <common></common>
    </view>
    <AppFooter type="AI"></AppFooter>
  </view>
</template>

<script>
import AppFooter from '@/components/AppFooter/index.vue'
import APPHeader from '@/components/APPHeader.vue'
import common from '@/components/common.vue'
export default {
  components: {
    common,
    APPHeader,
    AppFooter
  }
}
</script>

<style>
</style>
