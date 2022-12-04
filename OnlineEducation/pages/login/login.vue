<template>
	<view class="register">
		<view class="back" @click="back"></view>
		<!-- 注册表单 -->
		<view class="login">
			<h2>{{loginFlag?'登录':'注册'}}</h2>
			<myInput v-model="form" :formList="formList"></myInput>
			<view class="bg-main btn" @click="login">
				{{loginFlag?'登录':'注册'}}
			</view>
			<view class="flex align-center justify-between my-3 font">
				<text class="goLogin" @click="loginFlagChange">{{loginFlag?'去注册':'去登录'}}</text>
				<text class="forget" @click="navto">忘记密码?</text>
			</view>
			<view class="flex align-center justify-center wechatlogin">
				<text style="color: rgb(92, 204, 132); font-size: 25px;" class="iconfont icon-weixindenglu icon"></text>
			</view>
			<view class="flex align-center justify-center mt-4" v-if="loginFlag">
				<checkbox-group @change="checkflagChange">
					<checkbox class="checkbox" value="xz" :checked="checkflag" />
				</checkbox-group>
				<text class="main-btn">已阅读并同意用户协议&隐私声明</text>
			</view>
		</view>
	</view>
</template>

<script>
	import loginApi from "@/api/login.js"
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				form: {
					username: "",
					password: "",
					repassword: "",
				},
				//表单信息数据
				formList: [{
						type: 'text',
						prop: "username",
						icon: "iconfont icon-icon-test",
						placeholder: "请输入用户名",
						show: false,
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
						show: true,
						prop: "repassword",
					},
				],
				checkflag: false, //复选框状态
				loginFlag: true, //登录/注册切换
			};
		},
		computed: {
			...mapState(['phone'])
		},
		methods: {
			// 返回上级
			back(){
				uni.navigateBack()
			},
			//登录账号api
			login() {
				if (this.loginFlag) {
					if (this.checkflag) {
						this.haderLogin()
					}else{
						this.$util.msg('请先阅读并同意用户协议&隐私声明')
						console.log('123');
						// this.checkflag=true
						return
					}
					
				} else {
					this.registered()
				}
				
				// 注册
			},
			// 登录
			async haderLogin(){
				// 调取接口判断code码
				// 登录成功判断用户是否绑定手机号没有跳转绑定手机号页面 && 已绑定直接跳转my页面
				try{
					const res =await loginApi.login(this.form)
					if(res.statusCode==200){
						this.$util.msg('登录成功')
						this.$store.commit("login",res.data.data)
						if(res.data.data.phone){
							uni.switchTab({
								url:"/pages/my/my"
							})
						}else{
							uni.navigateTo({
								url:"/pages/my/binding"
							})
						}
					}else{
						this.$util.msg(res.data.data)
					}
					console.log(res,'登录res');
				}catch(e){
					console.log(e,'55');
					//TODO handle the exception
				}
			},
			// 注册功能
			async registered() {
				console.log(loginApi, '555');
				try {
					const res = await loginApi.registeredUser(this.form)
					console.log(res.data,'res注册');
					if (res.statusCode !== 20000) {
						this.$util.msg(res.data.data)
					}
					if (res.data.code === 20000) {
						this.$util.msg('注册成功')
						uni.navigateTo({
							url: "/pages/my/binding"
						})
						this.form = {
							username: "",
							password: "",
							repassword: "",
						}
						this.loginFlagChange()
					}
					uni.hideLoading()
				} catch (e) {
					//TODO handle the exception
				}
			},
			//注册账号api

			//注册/登录状态
			loginFlagChange() {
				this.form = {
					username: "",
					password: "",
					repassword: "",
				}
				this.loginFlag = !this.loginFlag
				this.formList[2].show = this.loginFlag
			},
			//切换复选框状态
			checkflagChange(e) {
				if (e.detail.value.length) {
					this.checkflag = true
				} else {
					this.checkflag = false
				}
				console.log(this.checkflag,'this.checkFlag');
			},
			// 忘记密码
			navto() {
				uni.navigateTo({
					url: '/pages/my/password'
				})
			}
		}
	}
</script>

<style lang="scss">
	.btn {
		margin-top: 40rpx;
	}

	page,
	.register {
		height: 100%;
		background-image: linear-gradient(90deg, #3bfdaf, #70d6f2);
		overflow: hidden;

		.back {
			width: 25rpx;
			height: 25rpx;
			border-left: 4rpx solid #fff;
			border-top: 4rpx solid #fff;
			transform: rotate(-45deg);
			margin: 30rpx 0 0 38rpx;
		}

		.margin-top {
			margin-top: 25rpx;
		}

		.main-btn {
			color: #000;
		}
	}
</style>
