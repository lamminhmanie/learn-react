// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <App />
    </>
)