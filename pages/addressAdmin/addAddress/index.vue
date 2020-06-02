<template>
	<!-- 新增地址 -->
	<view class="contain">
		<view class="contenter">
			<view class="status_bar">
				<view class="top_view"></view>
			</view>
			<APPHeader path="/pages/my/my">
				<template #title>
					<view class="bg-white">新增地址</view>
				</template>
			</APPHeader>
			<scroll-view scroll-y="true" class="contenter-scroll">
				<view class="add-house">
					<view class="cu-form-group margin-top">
						<view class="title">联系人</view>
						<input placeholder="请输入联系人" name="input">
					</view>
					<view class="cu-form-group">
						<view class="title">手机号</view>
						<input placeholder="请输入手机号" name="input">
					</view>
					<view class="cu-form-group" @click="openPicker">
						<view class="title">服务地址</view>
						<!-- <uni-picker>
              <div>
                <uni-view class="picker">{{region}}</uni-view>
              </div>
            </uni-picker>-->
						<view class="view-picker">
							<view class="picker">
								<text>{{region}}</text>
								<text class="cuIcon-right text-gray padding-left-sm"></text>
							</view>
						</view>
					</view>
					<view class="cu-form-group">
						<input placeholder="请填写详细地址：如街道/楼牌号等" name="input">
					</view>
					<!-- 提交 -->
					<view class="padding flex flex-direction">
						<button class="cu-btn bg-green lg">提交</button>
					</view>
				</view>
				<!-- 选择地区 -->
				<changeAddress @choseVal="choseValue" :lotusAddressData="lotusAddressData" />
			</scroll-view>
		</view>
	</view>
</template>

<script>
import APPHeader from "@/components/APPHeader.vue";
import changeAddress from "@/components/changeAddress/changeAddress.vue";

export default {
	components: { APPHeader, changeAddress },
	data() {
		return {
			lotusAddressData: {
				visible: false,
				provinceName: "",
				cityName: "",
				townName: ""
			},
			region: ""
		};
	},
	methods: {
		//打开picker
		openPicker() {
			this.lotusAddressData.visible = true;
			this.lotusAddressData.provinceName = "广东省";
			this.lotusAddressData.cityName = "广州市";
			this.lotusAddressData.townName = "白云区";
		},
		//回传已选的省市区的值
		choseValue(res) {
			//res数据源包括已选省市区与省市区code
			console.log(res);
			this.lotusAddressData.visible = res.visible; //visible为显示与关闭组件标识true显示false隐藏
			//res.isChose = 1省市区已选 res.isChose = 0;未选
			if (res.isChose) {
				this.lotusAddressData.provinceName = res.province; //省
				this.lotusAddressData.cityName = res.city; //市
				this.lotusAddressData.townName = res.town; //区
				this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
			}
		},
		// 保存地址
		saveAddress() { }
	}
};
</script>

<style>
.view-picker {
	flex: 1;
	overflow: hidden;
	position: relative;
}
.view-picker .picker {
	line-height: 50px;
	font-size: 14px;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	width: 100%;
	text-align: right;
}
</style>