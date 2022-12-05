<template>
	<view>
		<my-list @navto="navto"></my-list>
		<view class="btns p-2" v-if="$store.getters.getTokens">
			<button class="bg-main btn">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			navto(e){
				console.log(e,'修改');
				uni.navigateTo({
					url:"/"+e
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
