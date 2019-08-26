<template>
	<!-- 设置 -->
	<view class="contain">
		<view class="contenter">
			<view class="status_bar">
				<view class="top_view"></view>
			</view>
			<APPHeader path="/pages/my/my">
				<template #title>
					<view class="bg-white">设置</view>
				</template>
			</APPHeader>
			<scroll-view scroll-y="true" class="contenter-scroll">
				<view class="set-info">
					<view class="cu-list menu-avatar menu-set">
						<view class="cu-item">
							<view class="cu-avatar round lg" :style="'background-image:url('+imgHeader+');'"></view>
							<view class="content">
								<view class="text-grey">我就是我</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										<text>会员名：zdfdvds</text>
									</view>
								</view>
							</view>
							<view class="action" @click="viewPersonInfo">
								<button class="cu-btn line-green edit-btn padding-right"><text class="text-sm">编辑</text></button>
							</view>
						</view>
					</view>
					<view class="cu-form-group margin-top-sm">
						<view class="title">账户与安全</view>
						<text class="cuIcon-right text-gray"></text>
					</view>
					<view class="cu-form-group margin-top-sm">
						<view class="title">音效与通知</view>
						<text class="cuIcon-right text-gray"></text>
					</view>
					<view class="cu-form-group margin-top-sm">
						<view class="title">隐私</view>
						<text class="cuIcon-right text-gray"></text>
					</view>
					<view class="cu-form-group margin-top-sm">
						<view class="title">通用</view>
						<text class="cuIcon-right text-gray"></text>
					</view>
					<view class="cu-form-group margin-top-sm">
						<view class="title">问题反馈</view>
						<text class="cuIcon-right text-gray"></text>
					</view>
					<view class="padding flex flex-direction" @click="quitAcount">
						<button class="cu-btn bg-green lg">退出当前账号</button>
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
			// imgHeader: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
			imgHeader: '/static/userLogo.png'
		}
	},
	components: { APPHeader },
	methods: {
		// 点击查看我的信息
		viewPersonInfo() {
			uni.navigateTo({ url: '/pages/set/personalInfo/index' })
		},
		//退出当前账号
		quitAcount() {
			uni.setStorage({
				key: 'bitLogin',
				data: 'false',
				success: function () {
					uni.redirectTo({ url: '/pages/login/login' });
				}
			});
		}
	}
}
</script>

<style scoped>
.cu-form-group {
	padding: 10px 15px;
}
.edit-btn {
	width: 56px;
}
.menu-set .cu-item {
	padding-right: 20px;
}
.img-handler {
	display: flex;
	align-items: center;
}
</style>