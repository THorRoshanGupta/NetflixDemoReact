import React from 'react'

import './Promotion2.css'
import mobile from '../assets/mobile.jpg'
import title from  '../assets/boxshot.png'
import down from '../assets/download-icon.gif'

export default function Promotion2() {
  return (
     <div className='third-content-aligner'>
          <div className='clip'>
           <img className="image" src={mobile} alt='mobile'></img>
           <div className='download'>
            <img className="title" src={title} alt='title'></img>
            <p className='title smaller-font'>Stranger Things <br></br><p className='down'>Downloading...</p></p>
            
            <img  src={down} className='symbol-download'></img>
           </div>
         </div>
        <div className='third-text'>
            <div className='third-message big-font'>Download your shows, to watch offline </div>
            <br></br>
            <div className='third-message small-font'>Save your favourite easily and always have seomthing to watch</div>
            
         </div>
        
       
    </div>
  )
}
