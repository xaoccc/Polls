import axios from 'axios'
import { ACCESS_TOKEN } from './constants'

// Only for deployment in choreo
const apiUrl = 'https://43580d30-2874-4dd3-8819-9f5e0a5c0cf6-dev.e1-eu-north-azure.choreoapis.dev/notes/backend/v1/';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api