import Vue from "vue"
import Vuex from "vuex"
//引入本地存储
import {TOKEN_KEY,USER_KEY} from "@/config/Storage.js"
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		token: uni.getStorageInfoSync(TOKEN_KEY) || "",
		userinfo:uni.getStorageInfoSync(USER_KEY) || {}
	},
	mutations:{
		login(state,data){
			state.userinfo=data
			if(data){
				uni.getStorageInfoSync(USER_KEY,state.userinfo)
			}
			if(data.token){
				uni.getStorageInfoSync(TOKEN_KEY,data.token)
			}
		}
	},
	getters: {
		getToken(state) {
			return !state.token
		}
	}
})
export default store
