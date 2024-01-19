import React from 'react'
import './Content.css'
import './Fonts.css'


export default function Content() {
  return (
    <div className="cont">
        <div className="big-font">Unlimited movies, TV show and more</div>
        <div className="medium-font">watch anywhere. Cancel anytime</div>
        <div className="small-font">Ready to watch? Entry your email to create or restart your memebership </div>
        <div >
        <input type='email' className='email smaller-font' placeholder='Email address'/>
        <button className='large-button small-font '>Get Started {'>'}</button>
        </div>
    </div>
  )
}
