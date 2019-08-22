<template>
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="content">
      <APPHeader :path="`/pages/home/home?city=${value}`">
        <template #title>
          <view class="bg-white">城市选择</view>
        </template>
      </APPHeader>
      <ss-select-city
        :hotCitys="hotCitys"
        v-model="value"
        @on-select="onSelect"
      ></ss-select-city>
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
      value: '广州'
    }
  },
  components: {
    APPHeader,
    ssSelectCity
  },
  mounted() {
    this.value = this.$route.query.city;
    console.log(this.$route);
  },
  methods: {
    onSelect(city) {
      console.log(city)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
