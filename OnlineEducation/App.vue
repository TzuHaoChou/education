<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("@/common/free.css");
	@import url("@/common/common.css");
	/* 引入动画库 */
	@import url("@/common/animate.min.css");
	/* 引入icon */
	@import url("~@/common/iconfont.css");
	@import url("~@/common/fonts/iconfont.css");
</style>
