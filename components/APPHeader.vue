<template>
  <view class="app-header">
    <view class="cu-bar bg-white">
      <view
        class="action"
        @click="navBack"
      >
        <view v-if="bitBack">
          <text class="cuIcon-back text-gray"></text> 返回
        </view>
      </view>
      <view class="content text-bold">
        <slot name="title"></slot>
      </view>
      <view class="action">
        <slot name="action">
          <!-- <text class="cuIcon-cardboardfill text-grey"></text>
					<text class="cuIcon-recordfill text-red"></text> -->
        </slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: {
    bitBack: {
      type: Boolean,
      default: true
    },
    path: {
      type: String,
      default: ''
    }
  },
  methods: {
    //返回上一页
    navBack() {
      if (this.path) uni.navigateTo({
        url: this.path,
      });
      // else uni.navigateBack()
      else uni.redirectTo({ url: '/pages/openDoor/openDoor' })
    }
  },
}
</script>

<style>
</style>
