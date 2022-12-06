<template>
	<view class="p-2">
		<my-list :myinfolist="myinfolist" :usinfoflag="true" v-model="form"></my-list>
		<view class="p-3">
			<view class="bg-main main-btn " @click="btn">
				保存
			</view>
		</view>
	</view>
</template>

<script>
	import getApi from "@/api/login.js"
	export default {
		data() {
			return {
				form:{
					opassword: '',
					password: "",
					repassword: "",
				},
				myinfolist:[
					{
							title: '原密码',
							prop: "opassword",
							type: "input",
							value: '请输入原密码'
						},
						{
							title: '新密码',
							prop: "password",
							type: "input",
							value: '请输入新密码'
						},
						{
							title: '确认密码',
							prop: "repassword",
							type: "input",
							value: '请输入确认密码'
						},
				]
			};
		},
		methods:{
			async btn(){
				try{
					const res=await getApi.ChagingPassword(this.form)
					console.log(res,'修改密码');
					uni.showLoading({
						title:''
					})
					if(res.statusCode==200){
						this.$util.msg('修改成功')
						uni.hideLoading()
						uni.navigateBack()
						this.$store.commit('init')
					}else{
						this.$util.msg(res.data.data)
					}
				}catch(e){
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
