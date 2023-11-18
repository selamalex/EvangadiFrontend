import axios from 'axios';
const axiosBase = axios.create({
    baseURL: `${process.env.REACT_APP_base_url}/api`
})


export default axiosBase;