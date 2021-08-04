import axios from 'axios';

const loadList = (formData) => axios.get('/api/admin/order/list', { params: formData });

const orderCreate = (formData) => axios.post('/api/order/create', formData);

const orderSettle = (formData) => axios.post('/api/order/settle', formData);

const cartAdd = (formData) => axios.post('/api/cart/add', formData);

export default {
	loadList,
  orderCreate,
  cartAdd,
  orderSettle
}
