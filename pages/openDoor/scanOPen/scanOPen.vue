<template>
  <view class="scan-open">
    <view
      class="text-center"
      v-if="bitAdd"
    >
      <image
        src="/static/1563620491.png"
        class="image-scan"
      ></image>
      <view class="mt30 font20">请将二维码对准读卡器</view>
    </view>
    <!-- 如果没有绑定 -->
    <view
      class="text-center"
      v-else
    >
      <div class="mb50">
        <image
          src="/static/fail.png"
          class="image-fail"
        ></image>
        <view class="mt30 font20">啊哦~ 您当前未绑定房屋，请先绑定房屋</view>
      </div>
      <button
        class="cu-btn lg bg-green"
        @click="myHouse"
      >我的房屋</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      bitAdd: false, //是否绑定房屋
    }
  },
  methods: {
    //添加房屋
    myHouse() {
      uni.navigateTo({
        url: '/pages/myHouse/myHouse'
      });
    }
  }
}
</script>

<style>
.scan-open {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scan-open .image-fail {
  width: 60px;
  height: 60px;
}

.scan-open .image-scan {
  width: 280px;
  height: 280px;
}

.scan-open .mb50 {
  margin-bottom: 50px;
}
.font20 {
  font-size: 17spx;
}
</style>
