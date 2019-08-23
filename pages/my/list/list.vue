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
            :class="['cuIcon-' + item.cuIcon,'text-' + item.color,'bg-' + item.bg]"
            v-if="item.cuIcon"
            class="text-lg"
          ></text>
          <view
            :class="['text-' + item.color]"
            class="text-xl padding-bottom-sm"
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
.cu-item-green {
  background-color: #39b54a !important;
}
</style>