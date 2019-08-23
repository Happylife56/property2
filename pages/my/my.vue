<template>
  <!-- 我的 -->
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="contenter my">
      <scroll-view scroll-y="true">
        <!-- 头部 -->
        <view class="cu-list menu-avatar">
          <view class="bg-green padding-top-sm flex-end padding-right">
            <view><text class="text-xl"><text class="text-white cuIcon-qr_code margin-right-sm"></text></text>推广码</view>
          </view>
          <view class="cu-item cu-item-green">
            <view class="cu-avatar  lg round">
              <image
                class="logo-img"
                :src="login ? uerInfo.avatarUrl :avatarUrl"
              ></image>
            </view>
            <view class="content">
              <view class="text-white">
                <view class="text-cut">我就是我</view>
              </view>
              <view class="text-gray text-sm flex margin-top-xs">
                <view class="text-cut round bg-white padding-left-xs  padding-right-xs">
                  会员号：165465456456456456
                </view>
              </view>
            </view>
            <view class="action">
              <text class="text-xxl">
                <text class="text-white cuIcon-settings text-xl"></text>
              </text>
            </view>
          </view>
          <!-- 宫格 -->
          <list
            :datas="keepList"
            bg="green"
          ></list>
        </view>
        <!-- 钱包 积分 -->
        <list
          :datas="walletPoints"
          class="cu-list-money"
        ></list>
        <!-- 我的订单 -->
        <view class="my-order">
          <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
              我的订单
            </view>
            <view class="action">
              <text>查看更多订单</text>
              <text class="cuIcon-right"></text>
            </view>
          </view>
        </view>
        <!--  -->
      </scroll-view>
    </view>
    <AppFooter type="my"></AppFooter>
  </view>
</template>

<script>
import AppFooter from '@/components/AppFooter/index.vue'
import list from './list/list.vue'
export default {
  components: {
    AppFooter,
    list
  },
  data() {
    return {
      login: false,
      avatarUrl: '/static/userLogo.png',
      uerInfo: {},
      //收藏列表
      keepList: [{
        count: 2,
        color: 'white',
        name: '服务收藏'
      }, {
        count: 4,
        color: 'white',
        name: '商品收藏'
      }, {
        count: 6,
        color: 'white',
        name: '商家收藏'
      }, {
        count: 10,
        color: 'white',
        name: '浏览足迹'
      }],
      //钱包积分
      walletPoints: [
        {
          cuIcon: 'pay',
          color: 'gray',
          name: '钱包'
        },
        {
          cuIcon: 'friend',
          color: 'gray',
          name: '人脉'
        },
        {
          cuIcon: 'vip',
          color: 'gray',
          name: '卡券'
        },
        {
          cuIcon: 'news',
          color: 'gray',
          name: '积分'
        },
      ]
    }
  }
}
</script>

<style scoped>
.cu-item-green,
.status_bar {
  background-color: #39b54a !important;
}
.cu-item {
  padding: 10px 8px 15px !important;
}
.cu-list-money {
  margin-top: 0 !important;
}
.cu-item:after {
  border-bottom: none !important;
}
.cu-list {
  padding: 0 !important;
}
.logo-img {
  width: 100upx;
  height: 100upx;
}
.column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.align-items-center {
  display: flex;
  align-items: center;
}
</style>

