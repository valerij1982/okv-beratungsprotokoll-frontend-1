import { useAuth } from '../auth/AuthContext'
import logo from '../assets/okv_logo.jpg'
import {useTheme} from "../ThemeContext";

export default function Navbar() {
    const { user, logout } = useAuth()
    const {theme, toggleTheme } = useTheme()

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="OKV Logo" className="logo-img"/>
            </div>

            <div className="theme-toggle">
                <span>Theme: </span>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? '☀️' : '🌙'}
                </button>
            </div>

            {user && (
                <>

                    <div className="user">
                        <span>Benutzer: {user?.email}</span>
                    </div>

                    <div className="user-actions">
                        <button
                            className="button button--secondary"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </div>
                </>
            )}
        </nav>
    )
}
