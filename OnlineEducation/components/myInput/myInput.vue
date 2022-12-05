<template>
	<view class="myInut">
		<view v-if="!item.show" class="inputItem" v-for="(item,index) in formList" :key="index">
			<text class="icon" :class="item.icon"></text>
			<view class="inp_btn">
				<input class="inout" :type="item.type" :placeholder="item.placeholder" v-model.sync="value[item.prop]">
				<button @click="bten" class="btns" v-if="item.prop==='code'">{{btnTexts.title}}</button>
			</view>
		</view>
	</view>
</template>

<script>

	export default{
		name:"myinput",
		data(){
			return{
				timeflag: false,
				time: null,
			}
		},
		props:{
			value:{
				type:Object,
				default:()=>{}
			},
			formList:{
				type:Array,
				default:()=>[]
			},
			btnTexts:{
				type:Object,
				default:()=>{}
			}
		},
		
		methods:{
			bten(){
				console.log(this.btnTexts,'btnTexts');
				// this.setTiem()
				this.$emit('send')
			},
			// setTiem() {
			// 	//当timeflag为true 给他return掉
			// 	// 只能点一次 防抖节流
			// 	if (this.timeflag) return
			// 	this.timeflag = true
			// 	let num = 60
			// 	this.time = setInterval(() => {
			// 		num--
			// 		this.btnText = num + 's'
			// 		if (num <= 0) {
			// 			this.btnText = '发送'
			// 			clearInterval(this.time)
			// 			this.time = null
			// 		}
			// 	}, 1000)
			// },
		}
		
	}
</script>

<style lang="scss">
	.myInut{
		.inputItem{
			width: 615rpx;
			height: 95rpx;
			margin-top: 50rpx;
			background-color: #f5f5f5;
			display: flex;
			align-items: center;
			border-radius: 8rpx;
			.inp_btn{
				display: flex;
				height: 100%;
				.btns{
					background-color: #5ccc84;
					color: #fff;
					border-radius: 0 10rpx 10rpx 0;
					width: 220rpx;
					height:100%;
					&::after{
						border: 0;
					}
				}
			}
			.icon{
				width: 95rpx;
				text-align: center;
				color: rgb(51, 51, 51);
				font-size: 32rpx !important;
			}
			.inout{
				height: 95rpx;
				border: 0;
				background-color: transparent;
				outline: none;
				font-size: 34rpx;
			}
		}
	}
</style>