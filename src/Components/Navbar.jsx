import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const nav =useNavigate()
  const redirect=()=>{
    nav("/login")
  }
  return (
    <div className='nav'>
        <div className="logo">NETFLIX</div>
        <div className='second-half  '>
             <button className="langugage">{'\u3042'}A English {'\u25BE'}</button>
             <button className="signin" onClick={redirect}>Sign In</button>
        </div>
    </div>
  )
}
