export const msg = (title = '', param={}) => {
	if(!title) return;
	uni.showToast({
		title,
		duration: param.duration || 2000,
		mask: param.mask || false,
		icon: param.icon || 'none'
	});
}