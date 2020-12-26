import api from './index'

const apiUser = () => api.get('/users')

export default apiUser;