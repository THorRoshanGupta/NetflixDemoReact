import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { ContextApp } from '../NetflixPages/ContextApp';
import { useContext } from 'react';
import { Button } from 'bootstrap';
import '../Buttons.css'
import { useNavigate } from 'react-router';


export const Movieplaying = () => {
   const trailers = require.context('../../assets/movies/', true);  
   const trailersvid=trailers.keys().map(x=>trailers(x))
   const {preview}=useContext(ContextApp)
   const [ended,setEnded]=useState(false)
   const [playing,setPlaying]=useState(true)
   const nav=useNavigate()
 
  return (
    <div className=' top-5 w-full h-max bg-black flex flex-col justify-items-center items-center'>
      <ReactPlayer className='z-0'
      url={trailersvid[preview]}
      playing={playing}
      
      
     
        width='100%'
          height='100%'
          playIcon={true}
          onEnded={ ()=>{setEnded(true); setPlaying(false)} }
      
      controls >

      </ReactPlayer>
      {!playing && ended && <div    className=' z-10 absolute  w-2/4  h-12  top-2/4 flex flex-row justify-center  ' >
        <button className='w-1/4  rounded-xl bg-black text-white mr-3'  onClick={()=>{setPlaying(true)}}> replay {'\u27F3'}</button>
         <button className='w-1/4 rounded-xl bg-black  text-white' onClick={()=>nav('/netflix')}> back</button>

      </div>}
    </div>
  )
}
