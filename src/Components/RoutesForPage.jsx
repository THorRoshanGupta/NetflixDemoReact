import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomeScreenAllConten from './HomeScreenAllConten'
import FormLogin from './FormLogin'

export default function RoutesForPage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreenAllConten></HomeScreenAllConten>}></Route>
            <Route path="/login" element={<FormLogin/>}></Route>
        </Routes>
    
    </BrowserRouter>
  )
}
