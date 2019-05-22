import axios from 'axios';

const login = (formData) => axios.post('/api/admin/login', formData);

const register = (formData) => axios.post('/api/admin/register', formData);

const getUserInfo = (formData) => axios.post('/api/admin/register', formData);

export default {
	login,
	register,
	getUserInfo
}
