import $api from './request.js';
const api = {
	// 1.登录接口
	login(params) {
		return $api.request('/uc/auth/login', 'POST', params)
	},
	//2. 查询当前登录用户关联的业主或租户信息列表
	relUser(params) {
		return $api.request('/door/user/relUser', 'GET', params)
	},

	//3. 查询业主或租户关联的房源列表    id为业主或租户ID
	relList(id) {
		return $api.request(`/door/user/relList/${id}`, 'GET')
	},
	//查询给定业主ID已授权的（手机号码）门禁点及控制器等信息 路径参数userId为业主ID
	getOneUser(userId) {
		return $api.request(`/door/household/card/getOne/${userId}`, 'Get')
	},

}

export default api;
