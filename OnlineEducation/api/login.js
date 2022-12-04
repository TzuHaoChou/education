import request from "@/utils/request.js"
export default {
	registeredUser(data) {
		return request({
			url: '/mobile/reg',
			method: "post",
			data
		})
	},
	login(data) {
		return request({
			url:'/mobile/login',
			method:"post",
			data,
			
		})
	},
	//获取验证码
	getCode(data){
		return Http.request({
			url:'/get_captcha',
			data,
			method:"post",
		})
	},
	//绑定手机号
	getBindingPhone(data){
		return Http.request({
			url:'/bind_mobile',
			data,
			method:"post",
		})
	} 
}

