<template>
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="">
      <image
        class="logo"
        src="/static/logo.jpg"
      ></image>
      <view class="text-area">
        <text class="title">{{title}}</text>
      </view>
    </view>
    <AppFooter></AppFooter>
  </view>
</template>

<script>
import AppFooter from '@/components/AppFooter/index.vue'
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {

  },
  components: { AppFooter },
  methods: {

  }
}
</script>

<style>
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50upx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
