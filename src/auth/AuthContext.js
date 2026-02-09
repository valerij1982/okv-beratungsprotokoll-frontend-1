import {createContext, useContext, useEffect, useState} from 'react'
import api from "../api/axios";

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!token) {
            setUser(null)
            return
        }

        api.get('/me')
            .then(res => {
                setUser(res.data)
            })
            .catch( () => {
                //если токен битый или истёк
                logout()
            })
    }, [token])

    const login = async (email, password) => {
        const res = await api.post('/login', { email, password })

        // axios сюда дойдёт ТОЛЬКО если статус 2xx
        setToken(res.data.token)
        localStorage.setItem('token', res.data.token)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
