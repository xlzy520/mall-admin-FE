import { User } from '@/api/index';
const Login = ({ commit, state }, formData) => {
	return new Promise((resolve, reject) => {
		User.login(formData)
			.then((res) => {
				if (!res.status) {
					reject(res);
					return;
				}
				// 储存到state
				commit('setUserInfo', res.data);
				resolve(res);
			})
	});
};
const Register = ({ commit, state }, formData) => {
	return new Promise((resolve, reject) => {
		User.register(formData)
			.then((res) => {
				if (!res.status) {
					reject(res);
					return;
				}
				// 储存到state
				commit('setUserInfo', res.data);
				resolve(res);
			})
	});
};
const GetUserInfo = ({ commit, state }, formData) => {
	return new Promise((resolve, reject) => {
		User.getUserInfo(formData)
			.then((res) => {
				if (!res.status) {
					reject(res);
					return;
				}
				// 储存到state
				commit('setUserInfo', res.data);
				resolve(res);
			})
	});
};
const UpdateUserInfo = ({ commit, state }, formData) => {
	return new Promise((resolve, reject) => {
		User.updateUserInfo(formData)
			.then((res) => {
				if (!res.status) {
					reject(res);
					return;
				}
				// 储存到state
				commit('setUserInfo', formData);
				resolve(res);
			})
	});
};
export default {
	Login,
	Register,
	GetUserInfo,
	UpdateUserInfo,
}
