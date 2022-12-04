
const pageMixins={
	data(){
		return{
			
		}
	},
	methods:{
		//跳转
		navTo(url,option={}){
			uni.navigateTo({
				url,
			})
		},
		//返回上一页
		navBack(delta = 1){
			uni.navigateBack({
				delta
			})
		},
	}
	
}



export default pageMixins