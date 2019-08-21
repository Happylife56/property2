<template>
	<view class="contain">
		<view class="contenter">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
			<view class="cu-bar search bg-white">
				<view class="action" @click="getlocation">
					<text>{{city}}</text>
					<text class="cuIcon-triangledownfill"></text>
				</view>
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="全站搜索" confirm-type="search"></input>
				</view>
				<view class="cu-avatar round mr20" @click="scanCode2"><text class="cuIcon-scan color-white"></text></view>
			</view>
			<scroll-view scroll-y="true" class="scroll-Y">
				<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
					<swiper class="swiper-box" @change="change" autoplay>
						<swiper-item v-for="(item, index) in info" :key="index">
							<view class="swiper-item flex-center">
								<image :src="item.content" class="swiper-img"></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
				<!-- 宫格 -->
				<view class="cu-list grid col-4">
					<view class="cu-item" v-for="(item,index) in cuIconList" :key="index">
						<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
							<view class="cu-tag badge" v-if="item.badge!=0">
								<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
							</view>
						</view>
						<text>{{item.name}}</text>
					</view>
				</view>
				<!-- 头条 -->
				<view class="cu-bar bg-white">
					<view class="action title-style-3">
						<text class="text-xl text-red">今日头条</text>
						<view class="cu-bar bg-white">
							<view class="action">
								<text class="cuIcon-titles text-red"></text>
								<text>今日头条今日头条今日</text>
							</view>
						</view>
					</view>
				</view>
				<uniProductList></uniProductList>
			</scroll-view>
		</view>
		<AppFooter type="home"></AppFooter>
	</view>
</template>

<script>
	import {
		uniSwiperDot
	} from '@dcloudio/uni-ui';
	import uniProductList from '@/components/uni-product-list/uni-product-list'
	import AppFooter from '@/components/AppFooter/index.vue'

	export default {
		data() {
			return {
				info: [{
						content: '../../static/swiper1.jpg'
					},
					{
						content: '../../static/swiper2.jpg'
					},
					{
						content: '../../static/swiper3.jpg'
					}
				],
				cuIconList: [{
					cuIcon: 'unlock',
					color: 'red',
					badge: 0,
					name: '小区开门'
				}, {
					cuIcon: 'edit',
					color: 'orange',
					badge: 0,
					name: '访客管理'
				}, {
					cuIcon: 'servicefill',
					color: 'yellow',
					badge: 0,
					name: '小区物业'
				}, {
					cuIcon: 'taxi',
					color: 'olive',
					badge: 0,
					name: '车位预约'
				}, {
					cuIcon: 'repairfill',
					color: 'cyan',
					badge: 0,
					name: '上门安装'
				}, {
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '保洁清洗'
				}, {
					cuIcon: 'deliver ',
					color: 'purple',
					badge: 0,
					name: '搬家运货'
				}, {
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '更多'
				}],
				current: 0,
				mode: 'default',
				location: [],
				city: '广州',
				code: '',
				list: [1, 2, 3, 4, 5, 6]
			};
		},
		mounted() {
			if (this.$route.query.city) this.city = this.$route.query.city;
		},
		components: {
			uniSwiperDot,
			uniProductList,
			AppFooter
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			getlocation() {
				let that = this;
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						that.location = [res.longitude, res.latitude];
						uni.navigateTo({
							url: '/pages/changCity/index?city=广州',
						});
					},
					fail(err) {
						console.log(err);
					}
				});
			},
			// 扫码
			scanCode2() {
				// 只允许通过相机扫码
				let that = this;
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						that.code = res.result;
					}
				});
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	};
</script>

<style scoped>
	.swiper-item .swiper-img {
		width: 100%;
		height: 150px;
	}

	.header {
		background-color: #3492e9;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header .scan {
		width: 30px;
		height: 30px;
	}

	.color-white {
		color: #fff !important;
	}
</style>
