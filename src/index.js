import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

async function enableMocking() {
    const mode = process.env.REACT_APP_API_MODE
    console.log(
        `%c[APP] API mode: ${mode}`,
        'color: dodgerblue; font-weight: bold'
    )
    if (mode === 'msw') {
        console.log('%c[APP] Starting MSW worker...', 'color: orange')

        const { worker } = require('./mocks/browser')
        worker.start({
            onUnhandledRequest: 'bypass',
        })
    } else {
        console.log('%c[APP] MSW disabled', 'color: gray')
    }
}
enableMocking().then( () => {
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App />)
})