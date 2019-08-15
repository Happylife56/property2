<template>
	<view class="contain">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="contenter">
			<APPHeader>
				<template #title>
					<view class="bg-white">房屋认证</view>
				</template>
			</APPHeader>
			<scroll-view class="scroll-view_H" scroll-y="true">
				<view class="cu-form-group margin-top">
					<view class="title">地区：</view>
					<picker @change="PickerChange" :value="area" :range="areaData">
						<view class="picker">
							{{index>-1?picker[index]:'选择地区'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">小区：</view>
					<picker @change="PickerChange" :value="community" :range="communityData">
						<view class="picker">
							{{index>-1?picker[index]:'选择小区'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">楼栋：</view>
					<picker @change="PickerChange" :value="building" :range="buildingData">
						<view class="picker">
							{{index>-1?picker[index]:'选择'}}
						</view>
					</picker>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import APPHeader from '@/components/APPHeader.vue'
	import common from '@/components/common.vue'
	export default {
		components: {
			common,
			APPHeader,
		},
		data() {
			return {
				areaData: ['杭州', '广州'], //area
				communityData: ['万达', '恒大'], //Community
				buildingData: ['A栋', 'B栋'], //building
				unitData: ['1单元', '2单元'], //unit
				type: ['业主', '租客'], //房屋类型
				area: '', //地区
				community: '', //小区
				building: '', //楼栋
				unit: '', //单元
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
		}
	}
</script>

<style lang="less">

</style>
