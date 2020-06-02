<template>
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="contenter">
      <APPHeader :path="pathUrl">
        <template #title>
          <view class="bg-white">城市选择</view>
        </template>
      </APPHeader>
      <view class="contenter padding-top">
        <ss-select-city
          :hotCitys="hotCitys"
          v-model="value"
          @on-select="onSelect"
        ></ss-select-city>
      </view>
    </view>
  </view>
</template>

<script>
import APPHeader from '@/components/APPHeader.vue'
import ssSelectCity from '@/components/ss-select-city/ss-select-city.vue'
export default {
  data() {
    return {
      hotCitys: ['广州', '天津', '北京', '上海', '深圳', '杭州', '成都', '重庆', '厦门'],
      value: '广州',
      bitAdress: false,
    }
  },
  components: {
    APPHeader,
    ssSelectCity
  },
  computed: {
    pathUrl() {
      let query = this.value ? `?city=${this.value}` : ''
      return this.bitAdress ? `/pages/addressAdmin/addressAdmin${query}` : `/pages/home/home${query}`
    },
  },
  onLoad(e) {
    this.value = e.city;
    this.bitAdress = !!e.address;//是否为地址管理
  },
  methods: {
    onSelect(city) {
      this.value = city;
      console.log(city)
    }
  }
}
</script>

<style>
</style>