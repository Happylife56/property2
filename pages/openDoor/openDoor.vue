<template>
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="contenter">
      <APPHeader :bitBack="false">
        <template #title>
          <view class="bg-white">门禁</view>
        </template>
        <template #action><text
            class="cuIcon-scan text-green action-scan"
            @click="scanCode2"
          ></text></template>
      </APPHeader>
      <!-- 导航条 -->
      <scroll-view
        scroll-x
        class="nav bg-white"
      >
        <view class="flex text-center">
          <view
            class="cu-item flex-sub"
            :class="index==TabCur?'text-green cur':''"
            v-for="(item,index) in tabList"
            :key="index"
            @tap="tabSelect"
            :data-id="index"
          >
            {{item.name}}
          </view>
        </view>
      </scroll-view>
      <view class="door-content">
        <!-- 二维码开门 -->
        <scanOpen v-if="TabCur == 0"></scanOpen>
        <!-- 远程开门 -->
        <longRange v-else-if="TabCur == 1"></longRange>
        <!-- 临时二维码 -->
        <temporary v-else></temporary>
      </view>
    </view>
    <AppFooter type="door"></AppFooter>
  </view>
</template>

<script>
import AppFooter from '@/components/AppFooter/index.vue'
import APPHeader from '@/components/APPHeader.vue'
import scanOpen from './scanOPen/scanOPen.vue'
import longRange from './longRange/longRange.vue'
import temporary from './temporary/temporary.vue'

export default {
  components: {
    APPHeader,
    AppFooter,
    scanOpen,
    longRange,
    temporary
  },
  data() {
    return {
      tabList: [{
        name: '二维码开门',
        id: 1
      },
      {
        name: '远程开门',
        id: 2
      },
      {
        name: '临时二维码',
        id: 3
      },
      ],
      TabCur: 0,
    };
  },
  methods: {
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
    },
    // 扫码
    scanCode2() {
      // 只允许通过相机扫码
      let that = this;
      uni.scanCode({
        onlyFromCamera: true,
        success: function (res) {
          console.log('条码类型：' + res.scanType);
          console.log('条码内容：' + res.result);
          that.code = res.result;
        }
      });
    },
  }
}
</script>

<style scoped>
.door-content {
  flex: 1;
}

.action-scan {
  font-size: 24px;
}
</style>
