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
							{{area>-1?areaData[area]:'选择地区'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">小区：</view>
					<picker @change="communityChange" :value="community" :range="communityData">
						<view class="picker">
							{{community>-1?communityData[community]:'选择小区'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">楼栋：</view>
					<picker @change="buildingChange" :value="building" :range="buildingData">
						<view class="picker">
							{{building>-1?buildingData[building]:'选择楼栋'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">单元：</view>
					<picker @change="buildingChange" :value="building" :range="buildingData">
						<view class="picker">
							{{building>-1?buildingData[building]:'选择单元'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">门牌号：</view>
					<input placeholder="请输入门牌号" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">住户类型：</view>
					<picker @change="buildingChange" :value="building" :range="buildingData">
						<view class="picker">
							{{building>-1?buildingData[building]:'选择类型'}}
						</view>
					</picker>
				</view>
				<view class="padding flex flex-direction">
					<button class="cu-btn bg-green lg">提交</button>
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
				area: -1, //地区
				community: -1, //小区
				building: -1, //楼栋
				unit: -1, //单元
			}
		},
		methods: {
			//选择地区
			PickerChange(e) {
				this.index = e.detail.value
			},
			// 选择小区
			communityChange(e) {
				this.community = e.detail.value
			},
			// 选择楼栋
			buildingChange(e) {
				this.building = e.detail.value
			}
		}
	}
</script>

<style lang="less">

</style>
