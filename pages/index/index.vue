<template>
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="content">
      <image
        class="logo"
        src="/static/logo.png"
      ></image>
      <view class="text-area">
        <text class="title">{{title}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '智慧之家'
    }
  }

}
</script>

<style>
.content {
  height: 100vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200upx;
  width: 200upx;
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
}
</style>
