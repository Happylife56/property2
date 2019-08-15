<template>
	<view class="long-ange">
		<view class="long-conent">
			<view class="long-box mt20 bg-white border" v-for="(item,index) in list" :key="index" @click="clickOpenDoor">
				<text class="text-green">{{item.type == 'line' ? '在线' : '离线'}}</text>
				<view class="long-img text-center">
					<view class="cu-avatar round lg margin-xs" :class="[item.open ? 'bg-red' : 'bg-green']">
						<text class="cuIcon-lock text-white"></text>
					</view>
				</view>
				<text class="text-center">{{item.name}}</text>
			</view>
			<view class="long-box mt20" v-show="list.length%2 !== 0"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					type: 'line',
					name: '体验小区开门',
					open: true
				}, {
					type: 'unline',
					name: '体验小区开门',
					open: false
				}, {
					type: 'line',
					name: '体验小区开门',
					open: false
				}]
			}
		},
		methods: {
			clickOpenDoor() {
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				// innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
				innerAudioContext.src = '/static/open.mp3';
				innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
			}
		}
	}
</script>

<style scoped>
	.long-ange {
		height: 100%;
		/* display: flex;
	justify-content: center;
	align-items: center; */
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
</style>
