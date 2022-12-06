<template>
	<view>
		<my-list @navto="navto" :myinfolist="myinfolist" @clicklist="clicklist"></my-list>
		<view class="btns p-2" v-if="$store.getters.getTokens">
			<button class="bg-main btn" @click="goto">退出登录</button>
		</view>
	</view>
</template>

<script>
	import myselists from "@/config/new_file.js"
	import loginApi from "@/api/login.js"
	export default {
		data() {
			return {
				myinfolist:myselists()
			};
		},
		methods:{
			navto(e){
				console.log(e,'修改');
				uni.navigateTo({
					url:"/"+e
				})
				this.clicklist()
			},
			async goto(){
				try{
					const res= await loginApi.gotologin()
					console.log(res,'提出');
					if(res.statusCode==200){
						this.$util.msg('退出成功')
					this.$store.commit('gettolog',res.statusCode)
					uni.navigateTo({
						url:"/pages/my/my"
					})
					}
				}catch(e){
					//TODO handle the exception
				}
			},
			clicklist(){
				console.log(this.myinfolist);
				console.log('455555555555');
				uni.showModal({
					content: "是否要清除缓存",
					success: (res) => {
						console.log(res,'8888888888');
						// console.log('this.myinfolist.rightText',this.myselist.rightText);
						if (res.confirm) {
							this.myinfolist[1].rightText="0KB"
							this.$util.msg('清除成功')
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
					fail: (err) => {
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
