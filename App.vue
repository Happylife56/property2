<script>
export default {
  onLaunch: function () {
    // console.log('App Launch')
  },
  onShow: function () {
    // console.log('App Show')
    uni.getStorage({
      key: 'bitImage',
      success: (res) => {
        if (res.data == "true") {
          uni.setStorage({ key: 'bitImage', data: 'false' });
          // uni.navigateTo({
          //   url: '/pages/set/personalInfo/index',
          // });
        } else {
          this.validatorLogin();
        }
      },
      fail:res=>{
        this.validatorLogin();
      }
    })
  },
  onHide: function () {
    // console.log('App Hide')
  },
  methods: {
    //判断是否已经登录
    validatorLogin() {
      uni.getStorage({
        key: 'bitLogin',
        success: (res) => {
          uni.navigateTo({
            url: '/pages/openDoor/openDoor',
            success: res => { },
            fail: () => { },
            complete: () => { }
          });
        },
        fail: (res) => {
          uni.navigateTo({
            url: '/pages/login/login',
            success: res => { },
            fail: () => { },
            complete: () => { }
          });
        }
      });
    }
  }
}
</script>

<style>
/*每个页面公共css */
@import "colorui/main.css";
@import "colorui/icon.css";
@import "./style/common.css";
</style>
