<template>
	<view class="content-text">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-flex uni-column">
				<view class="flex-item flex-item-V uni-bg-red">
					<slot></slot>
				</view>
				<view class="flex-item flex-item-V uni-bg-green">此功能正在开发，敬请期待！</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.content-text{
		width: 100%;
		display: flex;
		flex: 1;
		justify-content: center;
		margin-top: 40px;
	}
</style>
