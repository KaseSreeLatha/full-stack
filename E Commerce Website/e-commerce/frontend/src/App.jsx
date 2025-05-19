import React from "react"
import LoginPage from "./components/LoginPage/LoginPage"
import './index.css'
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route element={<LoginPage />} path="/login" />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App