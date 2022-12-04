<template>
	<view class="box-list">
		<view class="back" @click="back"></view>
		<view class=" login">
			<text class="title">绑定手机号</text>
			<myInput @send="send" v-model.sync="form" :btnText="btnText" :formList="formList"></myInput>
			<view class="bg-main btn" @click="haderbinding">
				绑定
			</view> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeFlag:false,
				time:null,
				btnText:{
					title:'发送'
				},
				form: {
					phone: '',
					code: '',
				},
				// from表单
				formList: [{
						type: 'text',
						prop: "phone",
						icon: "iconfont icon-icon-test",
						placeholder: "请输入手机号",
						show: false,
					},
					{
						type: 'text',
						icon: "iconfont icon-mima",
						placeholder: "验证码",
						show: false,
						prop: "code",
				
					}
				],
			};
		},
		methods:{
			// 返回上一页
			back(){
				uni.navigateBack()
			},
			// 发送
			send(){
				this.setTiem()
				this.$util.msg("发送成功")
			},
			// 绑定
			haderbinding(){
				
			},
			setTiem(){
				let num = 60
				this.time = setInterval(()=>{
					num--
					this.btnText.title = num + 's'
					if(num<=0){
						this.btnText.title = '发送'
						clearInterval(this.time)
						this.time=null
					}
				},1000)
			},
		}
	}
</script>

<style lang="scss">
	page, .box-list{
		height: 100%;
		background-image: linear-gradient(90deg, #3bfdaf, #70d6f2);
		overflow: hidden;
		.btn{
			margin-top: 50rpx;
		}
		
	}
	.back {
			width: 15rpx;
			height: 15rpx;
			border-left: 4rpx solid #fff;
			border-top: 4rpx solid #fff;
			transform: rotate(-45deg);
			margin: 30rpx 0 0 38rpx;
		}
</style>
