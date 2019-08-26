<template>
  <!-- 个人信息 -->
  <view class="contain">
    <view class="contenter">
      <view class="status_bar">
        <view class="top_view"></view>
      </view>
      <APPHeader path="/pages/my/my">
        <template #title>
          <view class="bg-white">个人信息</view>
        </template>
      </APPHeader>
      <scroll-view
        scroll-y="true"
        class="contenter-scroll"
      >
        <view class="person-info">
          <view class="cu-form-group margin-top">
            <view class="title">头像：</view>
            <view class="img-handler">
              <view
                class="cu-avatar lg round margin-left"
                :style="'background-image:url('+imgHeader+');'"
              > </view>
              <text
                class="text-xxl"
                @tap="ChooseImage"
              >
                <text class='cuIcon-right text-gray'></text>
              </text>
            </view>
          </view>
          <view class="cu-form-group">
            <view class="title">昵称：</view>
            <input
              placeholder="请输入昵称"
              name="name"
            />
          </view>
          <view class="cu-form-group">
            <view class="title">会员名：</view>
            <input
              placeholder="请输入会员名"
              name="name"
            />
          </view>
          <view class="cu-form-group">
            <view class="title">会员号：</view>
            <input
              placeholder="请输入会员号"
              name="name"
              disabled
            />
          </view>
          <view class="cu-form-group">
            <view class="title">性别：</view>
            <picker
              @change="sexChange"
              :value="sex"
              :range="sexData"
            >
              <view class="picker">
                {{sex>-1?sexData[sex]:'选择性别'}}
              </view>
            </picker>
          </view>
          <view class="cu-form-group">
            <view class="title">手机号码：</view>
            <input
              placeholder="请输入手机号码"
              name="name"
              disabled
            />
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import APPHeader from '@/components/APPHeader.vue'

export default {
  data() {
    return {
      imgList: [],
      imgHeader: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
      name: '',
      sex: -1,
      sexData: ['男', '女']
    }
  },
  components: { APPHeader },
  methods: {
    ChooseImage() {
      // 设置是否打开上传图片
      uni.setStorage({
        key: 'bitImage',
        data: 'true',
        success: function (res) {
          console.log(res)
        }
      });
      uni.chooseImage({
        count: 4, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: (res) => {
          //跳转到当前页
          if (this.imgList.length != 0) {
            this.imgList = this.imgList.concat(res.tempFilePaths)
          } else {
            this.imgHeader = res.tempFiles[0].path
            this.imgList = res.tempFilePaths
          }
        }
      });
    },
    // 选择小区
    sexChange(e) {
      this.sex = e.detail.value
    },
  }
}
</script>

<style scoped>
.cu-form-group {
  padding: 10px 15px;
}
.img-handler {
  display: flex;
  align-items: center;
}
</style>