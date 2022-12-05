import configApi from "@/config/index.js"
import store from "@/store/index.js"
const request = (options) => {
	// const appid ='bd9d01ecc75dbbaaefce'
	const appid = configApi.appid
	// const token=configApi.token
	// const token = configApi.token
	const token = store.state.token
	// const token=store.state.token
	
	return new Promise((resolve, reject) => {
		console.log(token,'token');
		console.log(configApi.baseURL, 'config.baseURL');
		uni.request({
			url: configApi.baseURL + options.url,
			method: options.method || 'GET',
			header: {
				appid: appid,
				token: token,
				...options.header
			},
			data: options.data || {},
			success: (res) => {
				if (res.data.code === 20000) {
					resolve(res)
				}
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}
export default request
