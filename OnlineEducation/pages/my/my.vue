<template>
	<view class="box-list" @click="navto">

		<view class="mytxt">
			<view class="tit">
				<view class="left">我的</view>
				<view class="reight iconfont icon-gengduo"></view>
			</view>
			<immediately></immediately>
			<tabr-my></tabr-my>
		</view>
		<my-list></my-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			navto() {
			console.log(this.getToken);
			if(this.getToken){
				console.log('已登录');
			}else{
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
			}
		}
	}
</script>

<style lang="scss">
	.box-list {
		width: 750rpx;
		height: 100%;

		.mytxt {
			border: 0;
			width: 100%;
			height: 528rpx;
			background-color: #5ccc84;
			border-bottom-left-radius: 80rpx;
			border-bottom-right-radius: 80rpx;
		}

		.tit {
			width: 100%;
			// display: flex;
			color: #fff;
			font-size: 50rpx;
			// align-items: center;
			height: 10vh;
			line-height: 10vh;
			// background-color: red;
			position: absolute;
			position: relative;
			top: 10rpx;

			.left {
				float: left;
				margin-left: 20rpx;
			}

			.reight {
				float: right;
				margin-right: 20px;
				font-size: 50rpx;
			}
		}
	}
</style>
