import axios from 'axios'

const mode = process.env.REACT_APP_API_MODE

const baseURL =
    mode === 'msw'
        ? '/'
        : process.env.REACT_APP_API_URL

console.log(
    `%c[API] mode=${mode}, baseURL=${baseURL}`,
    'color: green; font-weight: bold'
)

const api = axios.create({
    baseURL,
})

// interceptor — автоматически добавляет JWT
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    console.log(
        `%c[API →] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
        'color: #999'
    )
    return config
})

api.interceptors.response.use(
    res => {
        console.log(
            `%c[API ←] ${res.status} ${res.config.url}`,
            'color: #4caf50'
        )
        return res
    },
    err => {
        console.error(
            `%c[API ✖] ${err.response?.status} ${err.config?.url}`,
            'color: red'
        )
        return Promise.reject(err)
    }
)


export default api
