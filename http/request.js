export default {
	request(url, method, data = {}) {
		let baseUrl = 'http://120.27.162.107:1111/api/v1'
		const token = uni.getStorageSync('token');
		if (!token && url !== '/uc/auth/login') {
			uni.navigateTo({
				url: '/pages/login/login'
			});
			return
		}
		return uni.request({
				url: `${baseUrl}${url}`, //仅为示例，并非真实接口地址。
				data: data,
				method: method,
				header: {
					'token': token //自定义请求头信息
				},
			})
			.then(data => { //data为一个数组，数组第一项为错误信息，第二项为返回数据
				var [error, res] = data;
				if (error) {
					uni.showToast({
						icon: 'none',
						title: error.message
					});
					return;
				}
				const {
					code,
					msg,
					message
				} = res.data
				// 判断token是否过期
				if (code == 401) {
					uni.navigateTo({
						url: '/pages/login/login'
					});
					uni.setStorageSync('bitLogin', false);
					return
				}
				if (code == 200) return res.data.data
				else {
					uni.showToast({
						icon: 'none',
						title: msg || message
					});
				}
			})
	}
}
