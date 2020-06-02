<template>
  <view class="contain">
    <view class="status_bar">
      <view class="top_view"></view>
    </view>
    <view class="content">
      <view class="header">
        <image src="/static/logo.png"></image>
      </view>

      <view class="list">
        <view class="list-call">
          <image
            class="img"
            src="/static/login/1.png"
          ></image>
          <input
            class="biaoti"
            v-model="phoneno"
            type="number"
            maxlength="11"
            placeholder="手机号"
          />
        </view>
        <view class="list-call">
          <image
            class="img"
            src="/static/login/2.png"
          ></image>
          <input
            class="biaoti"
            v-model="password"
            type="text"
            maxlength="32"
            placeholder="登录密码"
            :password="!showPassword"
          />
          <image
            class="img"
            :src="showPassword?'/static/login/op.png':'/static/login/cl.png'"
            @tap="display"
          ></image>
        </view>
        <view class="list-call">
          <image
            class="img"
            src="/static/login/3.png"
          ></image>
          <input
            class="biaoti"
            v-model="code"
            type="number"
            maxlength="4"
            placeholder="验证码"
          />
          <view
            class="yzm"
            :class="{ yzms: second>0 }"
            @tap="getcode"
          >{{yanzhengma}}</view>
        </view>
        <view class="list-call">
          <image
            class="img"
            src="/static/login/4.png"
          ></image>
          <input
            class="biaoti"
            v-model="invitation"
            type="text"
            maxlength="12"
            placeholder="邀请码"
          />
        </view>
      </view>

      <view
        class="dlbutton"
        hover-class="dlbutton-hover"
        @tap="bindLogin"
      >
        <text>注册</text>
      </view>
    </view>
    <!-- 协议 -->
    <!-- <view class="xieyi">
      <image
        @tap="xieyitong"
        :src="xieyi==true?'/static/login/ty1.png':'/static/login/ty0.png'"
      ></image>
      <text @tap="xieyitong"> 同意</text>
      <navigator
        url="blog?id=1"
        open-type="navigate"
      >《软件用户协议》</navigator>
    </view> -->
  </view>
</template>

<script>
var tha, js;
export default {
  onLoad() {
    tha = this;

  },
  onUnload() {
    clearInterval(js)
    this.second = 0;
  },
  data() {
    return {
      phoneno: '',
      password: '',
      code: '',
      invitation: '',
      xieyi: true,
      showPassword: false,
      second: 0
    };
  },
  computed: {
    yanzhengma() {
      if (this.second == 0) {
        return '获取验证码';
      } else {
        if (this.second < 10) {
          return '重新获取0' + this.second;
        } else {
          return '重新获取' + this.second;
        }
      }
    }
  },
  methods: {
    display() {
      this.showPassword = !this.showPassword
    },
    xieyitong() {
      this.xieyi = !this.xieyi;
    },
    getcode() {
      if (this.second > 0) {
        return;
      }
      this.second = 60;
      uni.request({
        url: 'http://***/getcode.html', //仅为示例，并非真实接口地址。
        data: { phoneno: this.phoneno, code_type: 'reg' },
        method: 'POST',
        dataType: 'json',
        success: (res) => {
          if (res.data.code != 200) {
            uni.showToast({ title: res.data.msg, icon: 'none' });
          } else {
            uni.showToast({ title: res.data.msg });
            js = setInterval(function () {
              tha.second--;
              if (tha.second == 0) {
                clearInterval(js)
              }
            }, 1000)
          }
        },
        fail: (res) => {
          uni.showToast({
            icon: 'none',
            title: '获取验证码失败，请重新获取'
          });
          this.second = 0;
        }
      });
    },
    bindLogin() {
      if (this.xieyi == false) {
        uni.showToast({
          icon: 'none',
          title: '请先阅读《软件用户协议》'
        });
        return;
      }
      if (this.phoneno.length != 11) {
        uni.showToast({
          icon: 'none',
          title: '手机号不正确'
        });
        return;
      }
      if (this.password.length < 6) {
        uni.showToast({
          icon: 'none',
          title: '密码不正确'
        });
        return;
      }
      if (this.code.length != 4) {
        uni.showToast({
          icon: 'none',
          title: '验证码不正确'
        });
        return;
      }
      uni.request({
        url: 'http://***/reg.html',
        data: {
          phoneno: this.phoneno,
          password: this.password,
          code: this.code,
          invitation: this.invitation
        },
        method: 'POST',
        dataType: 'json',
        success: (res) => {
          if (res.data.code != 200) {
            uni.showToast({ title: res.data.msg, icon: 'none' });
          } else {
            uni.showToast({ title: res.data.msg });
            setTimeout(function () {
              uni.navigateBack();
            }, 1500)
          }
        }
      });

    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  height: 100%;
  width: 100%;
}
.header {
  width: 161upx;
  height: 161upx;
  background: rgba(63, 235, 100, 1);
  box-shadow: 0upx 12upx 13upx 0upx rgba(63, 235, 100, 0.47);
  border-radius: 50%;
  margin-top: 30upx;
  margin-left: auto;
  margin-right: auto;
}
.header image {
  width: 161upx;
  height: 161upx;
  border-radius: 50%;
}

.list {
  display: flex;
  flex-direction: column;
  padding-top: 50upx;
  padding-left: 70upx;
  padding-right: 70upx;
}
.list-call {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100upx;
  color: #333333;
  border-bottom: 1upx solid rgba(230, 230, 230, 1);
}
.list-call .img {
  width: 40upx;
  height: 40upx;
}
.list-call .biaoti {
  flex: 1;
  text-align: left;
  font-size: 32upx;
  line-height: 100upx;
  margin-left: 16upx;
}
.yzm {
  color: #ff7d13;
  font-size: 24upx;
  line-height: 64upx;
  padding-left: 10upx;
  padding-right: 10upx;
  width: auto;
  height: 64upx;
  border: 1upx solid #ffa800;
  border-radius: 50upx;
}
.yzms {
  color: #999999 !important;
  border: 1upx solid #999999;
}
.dlbutton {
  color: #ffffff;
  font-size: 34upx;
  width: 470upx;
  height: 100upx;
  background: linear-gradient(
    -90deg,
    rgba(63, 235, 100, 1),
    rgba(188, 226, 158, 1)
  );
  box-shadow: 0upx 0upx 13upx 0upx rgba(164, 217, 228, 0.2);
  border-radius: 50upx;
  line-height: 100upx;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100upx;
}
.dlbutton-hover {
  background: linear-gradient(
    -90deg,
    rgba(63, 235, 100, 0.9),
    rgba(188, 226, 158, 0.9)
  );
}
.xieyi {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30upx;
  margin-top: 80upx;
  color: #ffa800;
  text-align: center;
  height: 40upx;
  line-height: 40upx;
}
.xieyi image {
  width: 40upx;
  height: 40upx;
}
</style>
