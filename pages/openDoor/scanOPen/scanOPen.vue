<template>
	<view class="scan-open">
		<view class="text-center" v-if="bitAdd">
			<image src="../../../../../static/1563620491.png" class="image-scan"></image>
			<view class="mt20 font20">请将二维码对准读卡器</view>
		</view>
		<!-- 如果没有绑定 -->
		<view class="text-center" v-else >
			<div class="mb50">
				<image src="../../../../../static/fail.png" class="image-fail"></image>
				<view class="mt20 font20">啊哦~ 您当前未绑定房屋，请先绑定房屋</view>
			</div>
			<button class="cu-btn lg bg-green">绑定房屋</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bitAdd: true, //是否绑定房屋
			}
		},
		methods: {

		}
	}
</script>

<style>
	.scan-open {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.scan-open .image-fail {
		width: 80px;
		height: 80px;
	}
	
	.scan-open .image-scan{
		width: 240px;
		width: 240px;
	}

	.scan-open .mb50 {
		margin-bottom: 50px;
	}
	.font20{
		font-size: 17spx;
	}
</style>
