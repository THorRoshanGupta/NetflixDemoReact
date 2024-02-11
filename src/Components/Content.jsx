import React from 'react'
import './Content.css'
import './Fonts.css'
import { useNavigate } from 'react-router'


export default function Content() {
  const nav=useNavigate()
  return (
    <div className="cont">
        <div className="big-font">Unlimited movies, TV show and more</div>
        <div className="medium-font">watch anywhere. Cancel anytime</div>
        <div className="small-font">Ready to watch? Entry your email to create or restart your memebership </div>
        <div className='register'>
        <input type='email' className='email smaller-font' placeholder='Email address'/>  
        <button onClick={()=>nav("/login",)}className='large-button small-font ' style={{width:"50%",height:"55px",background:"red"}}>Get Started{'>'}</button>
        </div>
    </div>
  )
}
