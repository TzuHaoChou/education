<template>
	<view class="px-3">
		<view class="flexs" v-for="(item,index) in myinfolist" :key="index">
			<view class="left " @click="navto(item.page)">
				<text :class="item.icon" style="font-size:30rpx; color: rgb(67, 150, 236);"></text>
				<text class="title itennanme">{{item.title}}</text>
			</view>
			<view class="right">
				<text :class="item.rightIcon"> </text>
				<text class="titles sub-title">{{item.rightText}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import myselist from "@/config/new_file.js"
	export default {
		name: "my-list",
		props: {
			myinfolist: {
				type: Array,
				default: () => myselist()
			}
		},
		data() {
			return {};
		},
		methods: {
			navto(url) {
				this.$emit('navto',url)
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">
	.titles{
		color: #000;
		font-weight: 350;
	}
	.right {
		color: #ccc;
	}

	.itennanme {
		font-size: 25rpx;
		color: #3b4144;
	}

	.left {
		// background-color: #3b4144;
	}

	.flexs {
		height: 40px;
		display: flex;
		justify-content: space-between;
		font: size 16px;
		background-color: #fff;
		align-items: center;
	}
	
</style>
