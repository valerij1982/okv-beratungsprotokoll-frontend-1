import AppRoutes from './AppRoutes'
import { AuthProvider } from './auth/AuthContext'
import {ThemeProvider} from "./ThemeContext";

export default function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <AppRoutes />
            </ThemeProvider>
        </AuthProvider>
    )
}
