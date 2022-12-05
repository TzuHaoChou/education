import request from "@/utils/request.js"
export default {
	registeredUsers(data) {
		return request({
			url: '/mobile/reg',
			method: "POST",
			data
		})
	},
	login(data) {
		return request({
			url:'/mobile/login',
			method:"POST",
			data,
			
		})
	},
	//获取验证码
	getCode(data){
		return request({
			url:'/mobile/get_captcha',
			data,
			method:"POST",
		})
	},
	//绑定手机号
	// http://demonuxtapi.dishait.cn/mobile/bind_mobile
	getPhonelist(data){
		return request({
			url:'/mobile/bind_mobile',
			data,
			method:"POST",
		})
	},
	//找回密码
	getpassword(data){
		return request({
			url:'/mobile/forget',
			data,
			method:"post",
		})
	},
}

