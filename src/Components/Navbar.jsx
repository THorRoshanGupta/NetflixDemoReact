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
        <div className="logo" onClick={()=>nav("/")}>NETFLIX</div>
        <div className='second-half  '>
             <select className="langugage" >
                
              <option value="english">{'\u3042' +"A English" }</option>
              <option value="english">हिंदी</option>
             
             </select>
             <button className="signin" onClick={redirect}>Sign In</button>
        </div>
    </div>
  )
}
