<template>
	<view class="box-list" @click="navto">
		<view class="mytxt">
			<immediately :getToken="getToken" :infoList="infoList" @gitlogin="gitlogin"></immediately>
			<tabr-my></tabr-my>
		</view>
		<my-list :myinfolist="myinfolist"></my-list>
	</view>
</template>

<script>
	import myusinfolist from "@/config/usinfo-list.js"
	import {TOKEN_KEY,USER_KEY} from "@/config/Storage.js"
	export default {
		data() {
			return {
				getToken: false,
				infoList:{},
				myinfolist:myusinfolist()
			}
		},
		onShow() {
			this.infoList = uni.getStorageSync('info') || {}
			this.getToken = !!uni.getStorageSync('token')
		},
		methods: {
			navto() {
				console.log(this.getToken);
				if (this.getToken) {
					console.log('已登录');
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			gitlogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
	.box-list {
		width: 100%;
		height: 100%;
		.mytxt {
		height: 320rpx;
		background-color: #5ccc84;
		// padding: 20rpx;
		border-radius: 0 0 60rpx 60rpx;
		}
	}
</style>
