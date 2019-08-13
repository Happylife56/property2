<template>
	<view class="cu-bar tabbar bg-white app-footer">
		<view class="action" :class="[type == 'home'?'text-green':'text-gray']">
			<navigator url="/pages/home/home" hover-class="none">
				<view class="cuIcon-home"></view> 首页
			</navigator>
		</view>
		<view class="action" :class="[type == 'property'?'text-green':'text-gray']">
			<navigator url="/pages/property/property" hover-class="none">
				<view class="cuIcon-servicefill"></view> 物业
			</navigator>
		</view>
		<view class="action add-action" :class="[type == 'door'?'text-green':'text-gray']">
			<navigator url="/pages/openDoor/openDoor" hover-class="none">
				<button class="cu-btn " :class="[type == 'door'?'bg-green cuIcon-unlock':'bg-gray cuIcon-lock']"></button>
				开门
			</navigator>
		</view>
		<view class="action" :class="[type == 'AI'?'text-green':'text-gray']">
			<navigator url="/pages/AI/AI" hover-class="none">
				<view class="cuIcon-shop">
					<!-- <view class="cu-tag badge"></view> -->
				</view>
				智能家居
			</navigator>
		</view>
		<view class="action" :class="[type == 'my'?'text-green':'text-gray']">
			<navigator url="/pages/my/my" hover-class="navigator-hover">
				<view class="cuIcon-my">
					<!-- <view class="cu-tag badge"></view> -->
				</view>
				我的
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			type: {
				type: String,
				default: 'lock'
			}

		},
	}
</script>

<style>
	.cu-bar {
		width: 100%;
	}
</style>
