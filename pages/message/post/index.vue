<template>
  <view class="contain">
    <view class="contenter">
      <view class="status_bar">
        <view class="top_view"></view>
      </view>
      <APPHeader path="/pages/my/my">
        <template #title>
          <view class="bg-white">发帖</view>
        </template>
      </APPHeader>
      <scroll-view
        scroll-y="true"
        class="contenter-scroll"
      >
        <form>
          <view class="cu-form-group margin-top bg-group">
            <view class="title">标题</view>
          </view>
          <view class="cu-form-group">
            <input
              placeholder="请输入标题，不小于3个字"
              name="input"
            />
          </view>
          <view class="cu-form-group margin-top bg-group">
            <view class="title">内容</view>
          </view>
          <view class="cu-form-group">
            <textarea
              maxlength="-1"
              @input="textareaAInput"
              placeholder="小区新鲜事，随时分享"
            ></textarea>
          </view>
          <view class="cu-bar bg-white margin-top">
            <view class="action">
              图片上传
            </view>
            <view class="action">
              {{imgList.length}}/9
            </view>
          </view>
          <view class="cu-form-group">
            <view class="grid col-4 grid-square flex-sub">
              <view
                class="bg-img"
                v-for="(item,index) in imgList"
                :key="index"
                @tap="ViewImage"
                :data-url="imgList[index]"
              >
                <image
                  :src="imgList[index]"
                  mode="aspectFill"
                ></image>
                <view
                  class="cu-tag bg-red"
                  @tap.stop="DelImg"
                  :data-index="index"
                >
                  <text class='cuIcon-close'></text>
                </view>
              </view>
              <view
                class="solids"
                @tap="ChooseImage"
                v-if="imgList.length<9"
              >
                <text class='cuIcon-cameraadd'></text>
              </view>
            </view>
          </view>
          <view class="padding flex flex-direction">
            <button class="cu-btn bg-green lg">发布</button>
          </view>
        </form>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import APPHeader from '@/components/APPHeader.vue'
export default {
  components: {
    APPHeader,
  },
  data() {
    return {
      imgList: [],
      imgHeader: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
    }
  },
  methods: {
    textareaAInput(e) {
      this.textareaAValue = e.detail.value
    },
    ChooseImage() {
      // 设置是否打开上传图片
      uni.setStorage({ key: 'bitImage', data: 'true' });
      uni.chooseImage({
        count: 9, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: (res) => {
          if (this.imgList.length != 0) {
            this.imgList = this.imgList.concat(res.tempFilePaths)
          } else {
            this.imgList = res.tempFilePaths
          }
        }
      });
    },
    ViewImage(e) {
      // 设置是否打开上传图片
      uni.setStorage({ key: 'bitImage', data: 'true' });
      uni.previewImage({
        urls: this.imgList,
        current: e.currentTarget.dataset.url
      });
    },
    DelImg(e) {
      this.imgList.splice(e.currentTarget.dataset.index, 1)
    },
  }
}
</script>

<style scoped>
.bg-group {
  background-color: transparent;
}
</style>
