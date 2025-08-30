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
import Header from "./react-component/Header"
import MainContent from './react-component/MainContent';

const root = createRoot(document.getElementById("root"));

function Page() {
    return(
        <>
        <Header />
        <MainContent />
        </>
    )
}

root.render(
    <Page />
)