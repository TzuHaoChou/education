<template>
	<view class="info p-2" @click="btn">
		<view class="fdc">
			<view class="left">
				<image v-if="!getToken" src="../../static/noLogin.png" mode=""></image>
				<image v-if="getToken && infoList.avatar" :src="infoList.avatar" mode=""></image>
			</view>
			<view class="right">
				<view class="rightName">
					<text class="top">{{getToken?infoList.username:'立即登录'}}</text>
					<text class="vip" v-if="infoList.vip && getToken">{{infoList.vip}}</text>
				</view>
				<text class="bottom">{{getToken?infoList.desc|| '暂无描述':'登录解锁更多功能'}}</text>
			</view>
		</view>
		<view class="setting" v-if="getToken">
			<text class="iconfont icon-leimupinleifenleileibie set"></text>
		</view>
	</view>
</template>
<script>
	import userInfoList from "@/config/usinfo-my.js"
	export default {
		props:{
			infoList:{
				type:Object,
				default:()=>userInfoList()
			},
			getToken:{
				type:Boolean,
				default:false
			}
		},
		created() {
			console.log(this.infoList,'44444');
			console.log(this.getToken,'toto');
		}
		,
		methods:{
			btn(){
				if(this.getToken){
					uni.navigateTo({
						url:"/pages/my/myuserinfo"
					})
				}else{
					this.$emit('gitlogin')
				}
			},
		}
	}
</script>

<style lang="scss">
	.info{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 5rpx;
		// margin-top: 15rpx;
		.fdc{
			display: flex;
			align-items: center;
		}
		.left{
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
		.right{
			display: flex;
			flex-direction: column;
			line-height: 65rpx;
			color: #fff;
			margin-left: 25rpx;
			.rightName{
				display: flex;
				.top{
					font-size: 32rpx;
				}
				.vip{
					font-size: 26rpx;
					color: #f2c310;
					padding-top: 3rpx;
					padding-left: 35rpx;
				}
			}
			
			.bottom{
				font-size: 26rpx;
			}
		
		}
		.setting{
			
			.set{
				color: #fff;
			}
		}
	}
</style>