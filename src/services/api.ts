import axios from "axios"

export const api = axios.create({
    baseURL: 'https://tsunode-blog-api.onrender.com',
    timeout: 35000
})