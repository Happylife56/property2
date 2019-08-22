<template>
  <view class="temporary-open">
    <!-- <view class="cu-bar bg-white solid-bottom">
      <view class="action">
        <text class="cuIcon-title text-orange"></text>有效期时间：
      </view>
      <view class="action action-flex">
        <dyDateTime
          @getData="geteEndData"
          class="data-time"
        ></dyDateTime>
        <text class="cuIcon-right"></text>
      </view>
    </view> -->
    <view class="cu-form-group margin-top">
      <text class="cuIcon-title text-orange mr10"></text>
      <view class="title">有效期时间：</view>
      <picker
        @change="PickerChange"
        :value="index"
        :range="picker"
      >
        <view class="picker">
          {{index>-1?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
        </view>
      </picker>
    </view>
    <!-- 二维码 -->
    <view class="text-center mt30 scan-screen">
      <image
        src="/static/1563620491.png"
        class="image-scan"
      ></image>
      <view class="mt30 font20">临时开门密码：888888</view>
    </view>
    <view class="text-center mt30">
      <button
        class="cu-btn lg bg-green"
        @click="shareImg"
      >分享二维码开门</button>
    </view>
  </view>
</template>

<script>
import dyDateTime from '@/components/dyDateTime/dyDateTime.vue'
export default {
  components: {
    dyDateTime
  },
  data() {
    return {
      startTime: '', //开始时间
      endTime: '', //结束时间
      picker: ['5分钟', '10分钟', '30分钟', "60分钟"],
      index: 0
    }
  },
  methods: {
    //获取开始时间
    getStartData(val) {
      this.startTime = val;
      console.log(val);
    },
    geteEndData(val) {
      this.endTime = val;
      console.log(val);
    },
    PickerChange(e) {
      this.index = e.detail.value
    },
    //分享
    shareImg() {
      uni.share({
        provider: "weixin",
        scene: "WXSceneSession",
        type: 2,
        imageUrl: "/static/logo.jpg",
        success: function (res) {
          console.log("success:" + JSON.stringify(res));
        },
        fail: function (err) {
          console.log("fail:" + JSON.stringify(err));
        }
      });
    }
  },

}
</script>

<style scoped>
.temporary-open {
  height: 100%;
}

.image-scan {
  width: 480upx;
  height: 480upx;
}

.temporary-open .action-flex {
  flex: 1;
  justify-content: flex-end;
}
.data-time {
  width: 100%;
  text-align: right;
}
.scan-screen {
  margin-top: 30px;
}
</style>
