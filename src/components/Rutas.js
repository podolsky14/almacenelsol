import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from '../pages/Contacto.js'
import Home from "../pages/Home.js"
import Layout from '../pages/Layout.js'
import Nosotros from '../pages/Nosotros.js'

export default function Rutas() {
    return (
        <div>
<BrowserRouter>
<Routes>

<Route path="/" element={<Layout/>}>     
<Route index element={<Home/>}/>
<Route path="nosotros" element={<Nosotros/>}/>
<Route path="contacto" element={<Contacto/>}/>
<Route path="*" element={<Navigate to="/"/>}/>
</Route>
</Routes>

</BrowserRouter>
            
        </div>
    )
}
