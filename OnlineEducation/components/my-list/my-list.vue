<template>
	<view class="px-3">
		<view class="flexs" v-for="(item,index) in myinfolist" :key="index">
			<view class="left " @click="navto(item.page)">
				<text class="" :class="item.icon" style="font-size:30rpx; color: rgb(67, 150, 236);"></text>
				<text class="title itennanme">{{item.title}}</text>
			</view>
			<view class="right uni-list-item" @click="clicklist(item)">
				<text :class="item.rightIcon" class="fleee"> </text>
				<text class="titles sub-title">{{item.rightText}}</text>
			</view>
			<view class="input" v-if="item.type=='input'">
				<input v-if="item.type=='input'" type="text" :placeholder="item.value" v-model="value[item.prop]">
			</view>
		</view>
	</view>
</template>

<script>
	// import myselist from "@/config/new_file.js"
	export default {
		name: "my-list",
		props: {
			myinfolist: {
				type: Array,
				default: () => []
			},
			usinfoflag: {
				type: Boolean,
				default: false
			},
			value: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {};
		},
		methods: {
			navto(url) {
				this.$emit('navto', url)
				uni.navigateTo({
					url: url
				})
			},
			clicklist(item){
				if(item.event){
				this.$emit('clicklist',item)
				}
			
			}
		}
	}
</script>

<style lang="scss">
	.input {
		input {
			text-align: right;
			height: 110rpx;
		}
	}

	.titles {
		color: #000;
		font-weight: 350;
	}

	.right {
		color: #ccc;
		// background-color: red;
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

	.px-3 {
		margin-top: 50rpx;
	}
</style>
