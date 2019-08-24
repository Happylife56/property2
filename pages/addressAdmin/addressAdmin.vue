<template>
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="contenter">
      <APPHeader path="/pages/my/my">
        <template #title>
          <view class="bg-white">地址管理</view>
        </template>
        <template #action>
          <button
            v-if="location.length"
            class="cu-btn line-green"
            @click="addHouse"
          >新增地址</button>
        </template>
      </APPHeader>
      <scroll-view scroll-y="true">
        <!-- 没有获取位置 -->
        <noLocation v-if="!location.length && !city" />
        <!-- 获取位置 -->
        <locationInfo :city="city" />
      </scroll-view>
    </view>
  </view>
</template>

<script>
import APPHeader from '@/components/APPHeader.vue'
import noLocation from './noLocation/index'
import locationInfo from './locationInfo/index'
export default {
  components: {
    APPHeader,
    noLocation,
    locationInfo
  },
  data() {
    return {
      location: [],//当前位置
      city: '广州',//是否选择城市
    }
  },
  onLoad(e) {
    if (!e.city) this.getlocation()// 获取当前的位置
    else this.city = e.city;
  },
  methods: {
    //获取当前的位置
    getlocation() {
      let that = this;
      uni.getLocation({
        type: 'wgs84',
        success: function (res) {
          // console.log('当前位置的经度：' + res.longitude);
          // console.log('当前位置的纬度：' + res.latitude);
          that.location = [res.longitude, res.latitude];
        },
        fail(err) {
          that.location = [];
        }
      });
    },
  }
}
</script>

<style>
</style>
