import { useState } from 'react'

export default function CreateDocumentForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Документ создан: ${title}`)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Beratungsprotokoll erstellen:</h3>

            <input
                className="input"
                placeholder="Name"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <textarea
                className="input textarea"
                placeholder="Beschreibung"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <button className="button">
                Erstellen
            </button>
        </form>
    )
}
