<template>
  <!-- 我的房屋 -->
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view
      class="contenter"
      @click="modalName = null"
    >
      <APPHeader>
        <template #title>
          <view class="bg-white">我的房屋</view>
        </template>
        <template #action>
          <button
            class="cu-btn line-green"
            @click="addHouse"
          >房屋认证</button>
        </template>
      </APPHeader>
      <scroll-view
        scroll-y="true"
        class="contenter-scroll"
      >
        <view class="cu-list menu">
          <view
            class="cu-item"
            :class="modalName=='move-box-'+ index?'move-cur':''"
            v-for="(item,index) in houseList"
            :key="index"
            @touchstart="ListTouchStart"
            @touchmove="ListTouchMove"
            @touchend="ListTouchEnd"
            :data-target="'move-box-' + index"
            @click="clikItem(index)"
          >
            <view class="content padding-tb ">
              <view class="text-ml">{{item.name}}</view>
              <view class="text-gray text-ml">房屋编号：{{item.code}}</view>
            </view>
            <view class="action">
              <view
                class="text-lg"
                :class="[item.status ? 'text-blue':'text-red']"
              >{{item.status ? '已审核' : '审核中'}}</view>
            </view>
            <view
              class="move"
              data-class="move"
            >
              <!-- <view class="bg-grey">置顶</view> -->
              <view
                class="bg-red"
                @touchend="deleteItem"
              >删除</view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import APPHeader from '@/components/APPHeader.vue'

export default {
  components: { APPHeader },
  data() {
    return {
      listTouchStart: 0,
      listTouchDirection: null,
      modalName: null,
      houseList: [
        { name: '某某小区B栋2003房', code: '656565', status: true },
        { name: '某某小区B栋2003房', code: '656565', status: false },
        { name: '某某小区B栋2003房', code: '656565', status: false },
      ]
    }
  },
  methods: {
    // 房屋认证
    addHouse() {
      uni.navigateTo({
        url: '/pages/addHouse/index'
      });
    },
    //选择房屋
    clikItem(index) {
      console.log(index)
    },
    //删除
    deleteItem(e) {
      this.listTouchDirection = null
      e.preventDefault();
    },
    // ListTouch触摸开始
    ListTouchStart(e) {
      this.listTouchStart = e.touches[0].pageX
    },

    // ListTouch计算方向
    ListTouchMove(e) {
      this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
    },

    // ListTouch计算滚动
    ListTouchEnd(e) {
      if (!this.listTouchDirection) return
      if (this.listTouchDirection == 'left') {
        this.modalName = e.currentTarget.dataset.target
      } else {
        this.modalName = null
      }
      this.listTouchDirection = null
    }
  }
}
</script>

<style scoped>
.action-scan {
  font-size: 24px;
}
</style>
