<template>
	<view class="p-3">
		<view class="flex bg-white shadow rounded">
			<view class="flex-1 flex flex-column align-center justify-center py-3" v-for="(item,index) in tabs"
				:key="index">
				<text :class="item.icon" class="icon"></text>
				<text class="name font-sm">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tabr-my",
		props: {
			tabs: {
				type: Array,
				default: () => [{
						tabIndex: 0,
						icon: "iconfont icon-OrderHistory",
						text: "订单"
					},
					{
						tabIndex: 0,
						icon: "iconfont icon-pinglun2",
						text: "信息"
					},
					{
						tabIndex: 0,
						icon: "iconfont icon-shoucang1",
						text: "收藏"
					},
					{
						tabIndex: 0,
						icon: "iconfont icon-e-learning-monitor",
						text: "在学"
					}
				]
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.p-3 {
		padding: 15px;
		
	}
	.icon{
		color: #fecc3b;
		font-size: 20px;
		margin-bottom: 10rpx;
	}
	.name{
		color: #6c757d;
	}
</style>
