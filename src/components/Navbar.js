import { useAuth } from '../auth/AuthContext'
import logo from '../assets/okv_logo.jpg'

export default function Navbar({ theme, onToggleTheme }) {
    const { user, logout } = useAuth()

    return (
        <nav className={`navbar ${theme}`}>
            <div className="logo">
                <img src={logo} alt="OKV Logo" className="logo-img"/>
            </div>

            <div className="theme-toggle">
                <span>Theme: </span>
                <button onClick={onToggleTheme}>
                    {theme === 'light' ? '☀️' : '🌙'}
                </button>
            </div>

            {user && (
                <>

                    <div className="user">
                        <span>Benutzer: {user?.email}</span>
                    </div>

                    <div className="user-actions">
                        <button onClick={logout}>Logout</button>
                    </div>
                </>
            )}
        </nav>
    )
}
