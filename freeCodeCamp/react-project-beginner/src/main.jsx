// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import "./index.css"
import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'
const root = createRoot(document.getElementById("root"))

import { Header } from "./react-component/Header.jsx"
import MainContent from "./react-component/MainContent.jsx"
import Footer from "./react-component/Footer.jsx"

function Page(){
    return(
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)