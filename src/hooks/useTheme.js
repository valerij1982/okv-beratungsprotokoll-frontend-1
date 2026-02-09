import { useEffect, useState } from 'react'

export function useTheme() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(t => (t === 'dark' ? 'light' : 'dark'))
    }

    return { theme, toggleTheme }
}
