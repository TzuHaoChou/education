<template>
	<!-- <view class=" ">
		<view class="p-3" v-for="(item,index) in tablist" :key="index" @click="navto(item.page)">
			<text class="iconfont icon-9 " :class="item.icon" style="font-size: 25rpx; color: rgb(67, 150, 236);"></text>
			<text class="uni-list-item__content-title itennanme">{{item.title}}</text>
			<text class=" iconfont icon-jinru"> </text>
			<!-- <text class="iconfont icon-arrow-right"></text> -->
	<!-- </view> -->
	<!-- </view> -->
	<view class="px-3">
		<view class="   flexs" v-for="(item,index) in tablist" :key="index" >
			<view class="left " @click="navto(item.page)">
				<text  :class="item.icon"
					style="font-size:30rpx; color: rgb(67, 150, 236);"></text>
				<text class="uni-list-item__content-title itennanme">{{item.title}}</text>
			</view>
			<view class="right">
				<text :class="item.rightIcon"> </text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-list",
		props: {
			tablist: {
				type: Array,
				default: () => [{
						id: 1,
						title: '我的优惠卷',
						icon: "iconfont icon-9 mr-2",
						rightIcon: "iconfont icon-jinru",
						page: "/pages/my-coupon/my-coupon"
					},
					{
						id: 2,
						title: '常见问题',
						icon: "iconfont icon-help mr-2",
						rightIcon: "iconfont icon-jinru",
						page: "/pages/commonwt/commonwt"
					},
					{
						id: 3,
						title: '设置',
						icon: "iconfont icon-leimupinleifenleileibie mr-2",
						rightIcon: "iconfont icon-jinru",
						page: "/pages/Setupthe/Setupthe"
					}
				]
			}
		},
		data() {
			return {};
		},
		methods: {
			navto(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">
	

	.right {
		color: #ccc;
	}

	.itennanme {
		font-size: 25rpx;
		color: #3b4144;
	}
	.left{
		// background-color: #3b4144;
	}
	.flexs{
		height: 40px;
		display: flex;
		justify-content: space-between;
		font: size 16px;
		background-color: #fff;
		align-items: center;
		
	}
	.px-3{
		margin-top:10rpx;
	}
</style>
