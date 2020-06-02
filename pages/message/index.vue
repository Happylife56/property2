<template>
  <!-- 消息 -->
  <view class="contain">
    <view class="contenter">
      <view class="status_bar">
        <view class="top_view"></view>
      </view>
      <view class="message">
        <!-- top -->
        <view class="cu-bar bg-green search">
          <view
            class="margin-left-sm text-lg"
            @click="redirectToMy"
          >
            <text class="cuIcon-back margin-right-xs"></text>
            消息</view>
          <view class="search-form round">
            <text class="cuIcon-search"></text>
            <input
              @blur="InputBlur"
              :adjust-position="false"
              type="text"
              placeholder="搜索"
              confirm-type="search"
            />
          </view>
          <!-- 圈子 -->
          <!-- <view class="action">
            <text class="cuIcon-group icont-xl"></text>
          </view> -->
          <!-- 发帖 -->
          <view
            class="action action-relative"
            @click="jumpToPost"
          >
            <view class="cu-tag badge"></view>
            <text class="cuIcon-add icont-xl"></text>
          </view>
        </view>
        <!-- tab -->
        <scroll-view
          scroll-x
          class="bg-white nav"
        >
          <view class="flex text-center">
            <view
              class="cu-item flex-sub"
              :class="index==TabCur?'text-green cur':''"
              v-for="(item,index) in tabList"
              :key="item.id"
              @tap="tabSelect"
              :data-id="index"
            >
              {{item.name}}
            </view>
          </view>
        </scroll-view>
        <scroll-view
          scroll-y="true"
          class="contenter-scroll view-body"
        >
          <!-- 分享 -->
          <share></share>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import share from './share/index.vue'

export default {
  data() {
    return {
      TabCur: 0,
      scrollLeft: 0,
      tabList: [
        { name: '分享', id: 1 },
        { name: '关注', id: 2 },
        { name: '二手', id: 3 },
        { name: '话题', id: 4 }
      ]
    }
  },
  components: { share },
  methods: {
    InputBlur() { },
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
    },
    //跳转我的界面
    redirectToMy() {
      uni.reLaunch({ url: '/pages/my/my' })
    },
    //跳转发帖
    jumpToPost() {
      uni.navigateTo({ url: '/pages/message/post/index' })
    }
  }
}
</script>

<style scoped>
.cu-item-green,
.status_bar {
  background-color: #39b54a !important;
}
.icont-xl {
  font-size: 24px !important;
}
.action-relative {
  position: relative;
  height: 70%;
}
.message {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.view-body {
  flex: 1;
  padding: 10px;
}
.bar-height {
  min-height: 36px;
}
</style>