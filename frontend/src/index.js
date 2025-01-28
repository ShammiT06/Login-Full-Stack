import React from "react"
import ReactDom from "react-dom/client"
import './index.css'
import App from "./Components/App"
import Signup from "./Components/Signup"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import { useState } from "react"
import Success from "./Components/Success"
const root=ReactDom.createRoot(document.querySelector(".container"))



root.render(<>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/success" element={<Success/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
</>)