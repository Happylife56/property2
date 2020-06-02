<template>
  <!-- 位置详情 -->
  <view class="location-info">
    <view class="cu-bar search bg-white">
      <view
        class="action"
        @click="changeCity"
      >
        <text class="padding-right-sm">{{ city }}</text>
        <text class="cuIcon-triangledownfill"></text>
      </view>
      <view class="search-form round">
        <text class="cuIcon-search"></text>
        <input
          @focus="InputFocus"
          @blur="InputBlur"
          :adjust-position="false"
          type="text"
          placeholder="搜索地址"
          confirm-type="search"
        />
      </view>
    </view>
    <!-- 当前地址 -->
    <view class="cu-bar">
      <view class="action">
        <text class="cuIcon-location"></text>
        <text class="text-gray">当前地址</text>
      </view>
    </view>
    <view class="cu-bar bg-white">
      <view class="action">
        <text class="padding-right-sm text-lg">木木小区</text>
      </view>
      <view class="action">
        <text class="cuIcon-focus text-green"></text>
        <text class="padding-left-sm">重新定位</text>
      </view>
    </view>
    <!-- 服务地址 -->
    <view class="cu-bar">
      <view class="action">
        <text class="cuIcon-shop"></text>
        <text class="text-gray">服务地址</text>
      </view>
    </view>
    <view class="cu-bar bg-white">
      <view class="action">
        <text class="padding-right-sm text-lg">你的服务地址</text>
      </view>
      <view class="action">
        <!-- <text class="cuIcon-shop text-green"></text>
        <text class="padding-left-sm">重新定位</text> -->
      </view>
    </view>
    <!-- 附近地址 -->
    <view class="cu-bar">
      <view class="action">
        <text class="cuIcon-activity"></text>
        <text class="text-gray">附近地址</text>
      </view>
    </view>
    <view class="cu-list menu">
      <view
        class="cu-item"
        v-for="(item,index) in nearbyList"
        :key="index"
      >
        <view class="content padding-tb-sm">
          <view>
            <text class="cuIcon-location margin-right-xs"></text>
            <text>{{item.name}}</text>
          </view>
          <view class="text-gray text-sm">
            <text class="margin-left-lg">{{item.detail}}</text> </view>
        </view>
        <view class="action">
          <view class="box-out  text-sm">
            <view class="box-sign text-white">邻居</view>
            <view class="box-count text-center">{{item.count}}人</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      InputBottom: 0,
      nearbyList: [
        { name: '鼎尚华府', detail: '江南和信路以北', count: 3 },
        { name: '南市小区', detail: '江南和信路以北2', count: 2 },
        { name: '何居小区', detail: '江南和信路以北3', count: 1 },
      ]
    };
  },
  props: {
    city: {
      type: String,
      default: '广州'
    }
  },
  onLoad(e) {
    uni.showToast({
      title: ''
    })
  },
  methods: {
    // 选择城市
    changeCity() {
      uni.navigateTo({ url: '/pages/changCity/index?address=1' })
    },
    InputFocus(e) {
      this.InputBottom = e.detail.height
    },
    InputBlur(e) {
      this.InputBottom = 0
    }
  }
}
</script>

<style scoped>
.box-out {
  color: red;
  border: 1px solid #e54d42;
  border-radius: 5px;
}
.box-out .box-sign {
  padding: 0 10px;
  background-color: #e54d42;
}
</style>