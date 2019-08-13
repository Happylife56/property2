<template>
	<view class="uni-product-list">
		<view class="uni-product" v-for="(product,index) in productList" :key="index">
			<view class="image-view">
				<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
			</view>
			<view class="uni-product-title">{{product.title}}</view>
			<view class="uni-product-price">
				<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
				<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
				<text class="uni-product-tip">{{product.tip}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'product-list',
				productList: [],
				renderImage: true
			};
		},
		mounted() {
			this.loadData()
		},
		methods: {
			loadData(action = 'add') {
				const data = [{
						image: '../../static/lock.jpg',
						title: '智能门锁指纹门锁智能门锁指纹门锁',
						originalPrice: 1999,
						favourPrice: 1888,
						tip: '自营'
					},
					{
						image: '../../static/lock.jpg',
						title: '智能门锁指纹门锁智能门锁指纹门锁',
						originalPrice: 1999,
						favourPrice: 1888,
						tip: '优惠'
					},
					{
						image: '../../static/lock.jpg',
						title: '智能门锁指纹门锁智能门锁指纹门锁',
						originalPrice: 1999,
						favourPrice: 1888,
						tip: '秒杀'
					},
					{
						image: '../../static/lock.jpg',
						title: '智能门锁指纹门锁智能门锁指纹门锁',
						originalPrice: 999,
						favourPrice: 958,
						tip: '秒杀'
					},
					{
						image: '../../static/lock.jpg',
						title: '智能门锁指纹门锁智能门锁指纹门锁 黑色',
						originalPrice: 999,
						favourPrice: 958,
						tip: '优惠'
					},
					{
						image: '../../static/lock.jpg',
						title: '智能门锁指纹门锁智能门锁指纹门锁 黑色',
						originalPrice: 2899,
						favourPrice: 2799,
						tip: '自营'
					}
				];

				if (action === 'refresh') {
					this.productList = [];
				}

				data.forEach(item => {
					this.productList.push(item);
				});
			}
		},
		onLoad() {
			this.loadData();
			setTimeout(() => {
				this.renderImage = true;
			}, 300);
		},
		onPullDownRefresh() {
			this.loadData('refresh');
			// 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onReachBottom() {
			this.loadData();
		}
	};
</script>

<style>
	/* product */
	page {
		background: #F8F8F8;
	}

	view {
		font-size: 28upx;
	}

	.uni-product-list {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: row;
	}

	.uni-product {
		padding: 20upx;
		display: flex;
		flex-direction: column;
	}

	.image-view {
		height: 330upx;
		width: 330upx;
		margin: 12upx 0;
	}

	.uni-product-image {
		height: 330upx;
		width: 330upx;
	}

	.uni-product-title {
		width: 300upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height: 1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.uni-product-price {
		margin-top: 10upx;
		font-size: 28upx;
		line-height: 1.5;
		position: relative;
	}

	.uni-product-price-original {
		color: #e80080;
	}

	.uni-product-price-favour {
		color: #888888;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.uni-product-tip {
		position: absolute;
		right: 10upx;
		background-color: #ff3333;
		color: #ffffff;
		padding: 0 10upx;
		border-radius: 5upx;
	}
</style>
