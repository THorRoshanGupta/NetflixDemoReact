import React from 'react'
import './Fonts.css'
import './Promotion.css'
import timon from '../assets/video/timon.webp'
import man from '../assets/video/vid1.mp4'

export default function Promotion() {
  return (
    <div className='second-content-aligner'>
        <div className='text'>
            <div className='message big-font'>Enjoy on your Tv</div>
            <div className='message small-font'>Watch on smat Tvs, Playstation,Xbox,</div>
            <div className='message small-font'>chromecasr,Apple Tv,Blue-ray players and more</div>
         </div>
         {/* <video className='tv' autoPlay loop muted>
    <source src={timon} type='timon/webp' />
</video> */}
<video className='tv check' autoPlay loop muted>
    <source src={man} type='video/mp4' />
</video>
         <div className='clip'></div>
    </div>
  )
}
