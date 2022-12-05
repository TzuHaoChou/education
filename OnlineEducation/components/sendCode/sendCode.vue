<template>
	<view>
		<!-- <button v-for="(item,index) in formList" :key="index" @click="bten" class="btns" v-if="item.prop='code'">{{btnTexts}}</button> -->
	</view>
</template>

<script>
	export default {
		name: "sendCode",
		props:{
			formList:{
				type:Array,
				default:()=>[]
			},
			btnTexts:{
				type:String,
				default:'发送'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.btns {
		background-color: #5ccc84;
		color: #fff;
		border-radius: 0 10rpx 10rpx 0;
		width: 220rpx;
		height: 100%;

		&::after {
			border: 0;
		}
	}
</style>
