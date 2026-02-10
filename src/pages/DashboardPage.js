import CreateDocumentForm from '../components/CreateDocumentForm'
import Navbar from "../components/Navbar";

export default function DashboardPage() {

    return (
        <div className="page">
            <Navbar />

            <main>
                <CreateDocumentForm />
                {/* Другой контент можно добавлять сюда */}
            </main>
        </div>
    )
}
