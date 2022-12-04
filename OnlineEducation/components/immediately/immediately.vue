<template>
	<view class="p-3">
		<view class="lists">
			<view class="imgs">
				<image src="" mode=""></image>
			</view>
			<view class="reight">
				<view class="top" @click="navto">
					{{getToken?"O(∩_∩)O哈哈~":'立即登录'}}
				</view>
				<view class="tob">
					{{getToken?'没有':'登录解锁更多功能'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import usinfo from "@/config/usinfo-my.js"
	import {mapGetters,mapState}from "vuex"
	export default {
		name: "immediately",
		data() {
			return {
			
			};
		},
		computed:{
			...mapGetters(['getToken'])
		},
		methods:{
			navto(){
				
			}
		}
	}
</script>

<style lang="scss">
	.lists {
		// margin-top: 20rpx;
		width: 100%;
		display: flex;
		align-items: center;
		// margin-left: 10rpx;
		.imgs {
		width: 125rpx;
		height: 125rpx;
		border-radius: 50%;
		background-color: #fff;
		image{
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
		}

		.reight {
			color: #fff;
			margin-left: 40rpx;

			.top {
				font-size: 40rpx;
				margin-bottom: 20rpx;
			}

			.tob {
				font-size: 30rpx;
			}
		}
	}
</style>
