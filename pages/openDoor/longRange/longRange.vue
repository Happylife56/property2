<template>
  <view class="long-ange">
    <view class="long-conent">
      <view
        class="long-box mt20 bg-white border"
        v-for="(item,index) in list"
        :key="index"
        @click="clickOpenDoor(item,index)"
      >
        <text class="text-green">{{item.type == 'unline' ? '离线' : '在线'}}</text>
        <view class="long-img text-center">
          <view
            class="cu-avatar round lg margin-xs"
            :class="[item.open ? 'bg-red' : 'bg-green',{'rotateIn':seletedIndex == index}]"
          >
            <text class="cuIcon-lock text-white"></text>
          </view>
        </view>
        <text class="text-center">{{item.name}}</text>
      </view>
      <view
        class="long-box mt20"
        v-show="list.length%2 !== 0"
      ></view>
    </view>
  </view>
</template>

<script>
import uniPopup from "@/components/uni-popup/uni-popup.vue"
export default {
  data() {
    return {
      list: [{
        type: 'unline',
        name: '体验小区开门',
        open: true,
      }, {
        type: 'line',
        name: '体验小区开门',
        open: false,
      }, {
        type: 'unline',
        name: '体验小区开门',
        open: true,
      }],
      biTanima: false, //是否执行动画
      seletedIndex: -1, //选择的下标
      loadModal: false
    }
  },
  components: {
    uniPopup
  },
  methods: {
    clickOpenDoor(item, index) {
      if (item.type == 'unline') return
      this.seletedIndex = index;
      const innerAudioContext = uni.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      // innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
      innerAudioContext.src = '/static/opendoor.wav';
      innerAudioContext.onPlay(() => {
        console.log('开始播放');
      });
      setTimeout(() => {
        this.seletedIndex = -1;
        uni.showToast({
          icon: 'none',
          title: '开门成功',
        });
      }, 1000)
    }
  }
}
</script>

<style scoped>
.long-ange {
  height: 100%;
}

.long-ange,
.long-conent {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-content: flex-start;
}

.long-conent .long-box {
  height: 150px;
  padding: 15px;
  width: 45%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.long-conent .border {
  border: #999999 1px solid;
}

@keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0.5;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.rotateIn {
  animation: rotateIn 2s infinite;
}
</style>
