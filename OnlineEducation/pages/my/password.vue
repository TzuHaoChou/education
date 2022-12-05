<template>
	<view class="loginlist">
		<view class="login-bg">
			<view class="backls" @click="back"></view>
		</view>
		<view class="login">
			<text class="title">找回密码</text>
			<myInput v-model.sync="form" :formList="formList" @send="send" :btnTexts="btnTexts"></myInput>
			<view class="bg-main btn" @click="retrieval">
				立即找回
			</view>
		</view>
	</view>
</template>
<script>
	import userApi from "@/api/login.js"
	export default {
		data() {
			return {
				form: {
					password: "",
					repassword: "",
					phone: "",
					code: "",
				},
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
					},
					{
						type: 'password',
						icon: "iconfont icon-mima",
						placeholder: "请输入密码",
						show: false,
						prop: "password",
					},
					{
						type: 'password',
						icon: "iconfont icon-mima",
						placeholder: "请输入确认密码",
						show: false,
						prop: "repassword",
					}
				],
				timeflag: false,
				time: null,
				btnTexts: {
					title:"发送"
				}
			};
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			send() {
				this.setTiem()
				this.getCode()
			},
			// 获取验证密码
			async getCode() {
				try {
					const res = await userApi.getCode({
						phone: this.form.phone
					})
					console.log(res, '验证码');
					if (res.statusCode !== 200) {
						this.$util.msg(res.data.data)
					} else {this.setTiem()
						this.setTiem()
						this.$util.msg(res.data)
					}
				} catch (e) {
					console.log(e, '获取验证码eeeeee');
					console.log('123');
					//TODO handle the exception
				}

			},
			async retrieval() {
			try{
				const res =await userApi.getpassword(this.form)
				console.log(res,'找回密码');
				if(res.statusCode==200){
					this.$util.msg('找回成功')
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}else{
					this.$util.msg('失败')
				}
				
			}catch(e){
				//TODO handle the exception
			}
			},
			setTiem() {
				//当timeflag为true 给他return掉
				// 只能点一次 防抖节流
				if (this.timeflag) return
				this.timeflag = true
				let num = 60
				this.time = setInterval(() => {
					num--
					this.btnTexts.title= num + 's'
					if (num <= 0) {
						this.btnTexts.title= '发送'
						clearInterval(this.time)
						this.time = null
					}
				}, 1000)
			},
		}

	}
</script>

<style lang="scss">
	// background-color: red;

	.backls {
		position: fixed;
		top: 0;
		left: 0;
		width: 18rpx;
		height: 18rpx;
		border-left: 4rpx solid #fff;
		border-top: 4rpx solid #fff;
		transform: rotate(-45deg);
		margin: 30rpx 0 0 38rpx;

	}

	.btn {
		margin-top: 50rpx;
	}
</style>
