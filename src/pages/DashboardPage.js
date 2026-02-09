import CreateDocumentForm from '../components/CreateDocumentForm'
import Navbar from "../components/Navbar";
import {useTheme} from "../hooks/useTheme";

export default function DashboardPage() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="page">
            <Navbar theme={theme} onToggleTheme={toggleTheme} />

            <main>
                <CreateDocumentForm />
                {/* Другой контент можно добавлять сюда */}
            </main>
        </div>
    )
}
