<template>
	<view class="box-list">
		<view class="back" @click="navtoback"></view>
		<view class=" login">
			<text class="title">绑定手机号</text>
			<myInput @send="send" v-model.sync="form" :btnTexts="btnTexts" :formList="formList"></myInput>
			<view class="bg-main btn" @click="haderbinding">
				绑定
			</view>
		</view>
	</view>
</template>

<script>
	import loginApi from "@/api/login.js"
	import {
		report
	} from 'process';
	export default {
		data() {
			return {
				timeflag: false,
				time: null,
				btnTexts: {
					title: '发送'
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
		methods: {
			// 返回上一页
			navtoback(){
				uni.navigateBack()
			},
			// 发送
			send() {

				this.getCode()


			},
			// 获取验证码
			async getCode() {
				try {
					const res = await loginApi.getCode({
						phone: this.form.phone
					})
					console.log(res, '验证码');
					if (res.statusCode !== 200) {
						this.$util.msg(res.data.data)
					} else {
						this.setTiem()
						this.$util.msg("发送成功")
					}
				} catch (e) {
					console.log(e, '获取验证码eeeeee');
					console.log('123');
					//TODO handle the exception
				}

			},
			// 绑定
			async haderbinding() {
				try {
					const res = await loginApi.getPhonelist(this.form)
					console.log(res, '绑定');
					if (res.statusCode !== 200) {
						this.$util(res.data.data)
					} else {
						this.$util.msg('已绑定成功')
						
						uni.hideLoading()
						uni.switchTab({
							url: '/pages/my/my'
						});
					}
				} catch (e) {
					console.log(e, '绑定');
					console.log('789');
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
					this.btnTexts.title = num + 's'
					if (num <= 0) {
						this.btnTexts.title = '发送'
						clearInterval(this.time)
						this.time = null
					}
				}, 1000)
			},
		}
	}
</script>

<style lang="scss">
	page,
	.box-list {
		height: 100%;
		background-image: linear-gradient(90deg, #3bfdaf, #70d6f2);
		overflow: hidden;

		.btn {
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
