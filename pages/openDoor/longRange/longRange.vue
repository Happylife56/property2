<template>
	<view class="long-ange">
		<view class="long-conent" v-if="list.length">
			<view class="long-box mt20 bg-white border" v-for="(item,index) in list" :key="item.id" @click="clickOpenDoor(item,index)">
				<text class="text-green">{{item.type == 'unline' ? '离线' : '在线'}}</text>
				<view class="long-img text-center">
					<view class="cu-avatar round lg margin-xs" :class="[!item.open ? 'bg-red' : 'bg-green',{'rotateIn':seletedIndex == index}]">
						<text class="cuIcon-lock text-white"></text>
					</view>
				</view>
				<text class="text-center">{{item.name}}</text>
			</view>
			<view class="long-box mt20" v-show="list.length%2 !== 0"></view>
		</view>
		<view class="mt30" v-else>暂无门锁信息！</view>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import $api from '@/http/api.js'
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				// list: [{
				// 	type: 'unline',
				// 	name: '体验小区开门',
				// 	open: true,
				// }, {
				// 	type: 'line',
				// 	name: '体验小区开门',
				// 	open: false,
				// }, {
				// 	type: 'unline',
				// 	name: '体验小区开门',
				// 	open: true,
				// }],
				biTanima: false, //是否执行动画
				seletedIndex: -1, //选择的下标
				loadModal: false
			}
		},
		components: {
			uniPopup
		},
		methods: {
			// 点击开门
			clickOpenDoor(item, index) {
				const token = uni.getStorageSync('token')
				const {
					iotDeviceAcsdoor: {
						iotId
					}
				} = item
				const relUser = uni.getStorageSync('relUser')
				console.log(relUser)
				let params = {
					"accessToken": token,
					"clientData": {
						"PageId": 1
					},
					"requestData": {
						"Action": "RemoteControlRequest",
						"DeviceProtocol": "WeiGengDoorProtocol",
						"Method": "doOpen",
						"DoorIndex": index + 1,
						"IotId": iotId,
						"CardNo": relUser.mobile
					}
				}
				console.log(params,1)
				// 如果不在线
				if (item.type == 'unline') return
				this.seletedIndex = index;
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				// innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
				innerAudioContext.src = '/static/opendoor.wav';
				innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
				setTimeout(() => {
					this.seletedIndex = -1;
					uni.showToast({
						icon: 'none',
						title: '开门成功',
					});
				}, 1000)
			}
		}
	}
</script>

<style scoped>
	.long-ange {
		height: 100%;
	}

	.long-ange,
	.long-conent {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: space-around;
		align-content: flex-start;
	}

	.long-conent .long-box {
		height: 150px;
		padding: 15px;
		width: 45%;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.long-conent .border {
		border: #999999 1px solid;
	}

	@keyframes rotateIn {
		from {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: rotate3d(0, 0, 1, -200deg);
			transform: rotate3d(0, 0, 1, -200deg);
			opacity: 0.5;
		}

		to {
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			opacity: 1;
		}
	}

	.rotateIn {
		animation: rotateIn 2s infinite;
	}
</style>
