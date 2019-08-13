<template>
	<view class="contain">
		<view class="contenter">
			<APPHeader>
				<template #title>
					<view class="bg-white">物业</view>
				</template>
			</APPHeader>
			<common></common>
		</view>
		<AppFooter type="property"></AppFooter>
	</view>
</template>

<script>
	import AppFooter from '@/components/AppFooter/index.vue'
	import APPHeader from '@/components/APPHeader.vue'
	import common from '@/components/common.vue'
	export default {
		components: {
			common,
			APPHeader,
			AppFooter
		}
	}
</script>

<style>
</style>
