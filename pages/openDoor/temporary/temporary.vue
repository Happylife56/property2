<template>
	<view class="temporary-open">
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 有效期开始时间：
			</view>
			<view class="action">
				<dyDateTime @getData="getStartData"></dyDateTime>
				<text class="cuIcon-right"></text>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 有效期结束时间：
			</view>
			<view class="action">
				<dyDateTime @getData="geteEndData"></dyDateTime>
				<text class="cuIcon-right"></text>
			</view>
		</view>
		<!-- 二维码 -->
		<view class="text-center mt20">
			<image src="../../../../../static/1563620491.png" class="image-scan"></image>
			<view class="mt20 font20">临时开门密码：888888</view>
		</view>
		<view class="text-center mt20">
			<button class="cu-btn lg bg-green" @click="shareImg">分享二维码开门</button>
		</view>
	</view>
</template>

<script>
	import dyDateTime from '@/components/dyDateTime/dyDateTime.vue'
	export default {
		components: {
			dyDateTime
		},
		data() {
			return {
				startTime: '', //开始时间
				endTime: '', //结束时间
			}
		},
		methods: {
			//获取开始时间
			getStartData(val) {
				this.startTime = val;
				console.log(val);
			},
			geteEndData(val) {
				this.endTime = val;
				console.log(val);
			},
			//分享
			shareImg() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 2,
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		},

	}
</script>

<style scoped>
	.temporary-open {
		height: 100%;
		/* display: flex;
		justify-content: center;
		align-items: center; */
	}

	.image-scan {
		width: 240px;
		width: 240px;
	}
</style>
