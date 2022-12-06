import Vue from "vue"
import Vuex from "vuex"
//引入本地存储
import {TOKEN_KEY,USER_KEY} from "@/config/Storage.js"
Vue.use(Vuex)
let INFO = "info"
let TOKEN = "token"
const store = new Vuex.Store({
	state: {
		info:uni.getStorageSync(INFO) || {},
		token:uni.getStorageSync(TOKEN) || null,
	},
	mutations:{
		init(state){
			state.token = uni.getStorageSync(TOKEN) || ""
		},
		login(state,data){
			if(data){
				uni.setStorageSync(INFO,data) 
			}
			if(data.token){
				uni.setStorageSync(TOKEN,data.token) 
			}
		},
		gettolog(state,data){
			if(data==200){
				uni.removeStorageSync(TOKEN)
				uni.removeStorageSync(INFO)
			}
		}
	},
	getters: {
		getTokens(state){
			return !!state.token
		},
	}
})
export default store
