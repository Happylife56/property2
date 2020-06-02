<template>
  <!-- 推广码 -->
  <view class="contain">
    <view class="contenter">
      <view class="status_bar">
        <view class="top_view"></view>
      </view>
      <APPHeader>
        <template #title>
          <view class="bg-white">推广码</view>
        </template>
      </APPHeader>
      <view class="promotion-code">
        <view class="flex-center">
          <text class="text-blod text-lg margin-top margin-bottom">长按二维码转发</text>
          <view
            class="image-view"
            @touchstart="touchstart"
            @touchend="touchend"
          >
            <text class="text-lg text-bold">张海洋</text>
            <image
              src="/static/1563620491.png"
              class="image-scan margin-top margin-bottom"
            ></image>
            <text class="text-lg text-bold">推广码</text>
          </view>
        </view>
        <!-- 姓名会员 -->
        <view class="name-member margin-top">
          <view>姓名：ddd</view>
          <view>会员：ddd</view>
          <view>亲，当您有5个注册会员后，会变成固定的二维码哦</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import APPHeader from '@/components/APPHeader.vue'

export default {
  data() {
    return {
      timeStamp: 0
    }
  },
  components: { APPHeader },
  methods: {
    touchstart(e) {
      this.timeStamp = e.timeStamp
      console.log(e.timeStamp)
    },
    touchend(e) {
      console.log(e.timeStamp)
      if (e.timeStamp - this.timeStamp > 1000) {
        // 设置是否打开上传图片
        uni.setStorage({ key: 'bitImage', data: 'true' });
        // 分享二维码
        uni.share({
          provider: "weixin",
          scene: "WXSceneSession",
          type: 2,
          imageUrl: "/static/logo.png",
          success: function (res) {
            console.log("success:" + JSON.stringify(res));
          },
          fail: function (err) {
            console.log("fail:" + JSON.stringify(err));
          }
        });
      }
    }
  }
}
</script>

<style scoped>
.promotion-code {
  padding: 40upx 60upx;
}
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-view {
  background-color: #fff;
  padding: 40upx 60upx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-scan {
  width: 520upx;
  height: 520upx;
}
.name-member {
  line-height: 1.8;
  font-weight: bold;
}
</style>