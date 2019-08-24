<template>
  <view>
    <view
      class="cu-list grid no-border"
      :class="['col-'+ col,'cu-item-' + bg ]"
    >
      <view
        class="cu-item"
        v-for="(item,index) in datas"
        :key="index"
      >
        <view class="padding-bottom-sm text-lg">
          <text
            :class="['cuIcon-' + item.cuIcon,'text-' + item.iconcolor]"
            v-if="item.cuIcon"
            class="text-lg"
          ></text>
          <image
            class="image-icon"
            :src="item.iconfont"
            v-if="item.iconfont"
          ></image>
          <view
            :class="['text-' + item.color]"
            class="text-xl"
            v-if="item.count"
          >{{item.count}}</view>
        </view>
        <view
          class="text-df"
          :class="['text-' + item.color]"
        >{{item.name}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    col: {
      type: Number,
      default: 4
    },
    bg: {
      type: String,
      default: ''
    },
    //数据
    datas: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 1368029 */
  src: url("https://at.alicdn.com/t/font_1368029_jfgx5ep7nk.eot");
  src: url("https://at.alicdn.com/t/font_1368029_jfgx5ep7nk.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1368029_jfgx5ep7nk.woff2") format("woff2"),
    url("https://at.alicdn.com/t/font_1368029_jfgx5ep7nk.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1368029_jfgx5ep7nk.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_1368029_jfgx5ep7nk.svg#iconfont")
      format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.cu-item-green {
  background-color: #39b54a !important;
}
uni-image,
.image-icon {
  width: 32px !important;
  height: 32px !important;
}
</style>