import {useState} from 'react'
import {useAuth} from '../auth/AuthContext'
import {useNavigate} from 'react-router-dom'
import Navbar from "../components/Navbar";
export default function LoginPage() {
    const {login} = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        try {
            //сохраняем JWT
            await login(email, password)
            //редирект
            navigate('/dashboard', { replace: true })
        } catch(e) {
            setError('Ungültiger Login oder Passwort')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="page">
            <Navbar />
            <main>
                <div className="login-box">
                    <h2>Anmeldung:</h2>
                    <form className="form" onSubmit={handleSubmit} autoComplete="off">
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="off"
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Passwort"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                        {error && <p className="error">{error}</p>}
                        <button className="button" type="submit" disabled={loading}>
                            {loading ? 'Anmeldung...' : 'Anmelden'}
                        </button>
                    </form>
                </div>
            </main>
        </div>)
}
