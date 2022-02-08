
import axios from 'axios';

export const key = "1ced853fe5cb778017b58ac72ac1b93f54e262fc";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;