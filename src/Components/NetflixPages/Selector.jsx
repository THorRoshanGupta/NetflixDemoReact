import React from 'react'
import './Selector.css'
// import m1 from '../../assets/imagesHome/harry.jpg'

export default function Selector() {
    const images1 = require.context('../../assets/imagesHome', true);
    console.log(typeof images1)
    const imagelist=images1.keys().map(x=>images1(x))
    console.log(typeof imagelist)
    console.log( imagelist)
   
    // console.log(  images1[0])
    
  return (
    <div className='listOfItem'>
        {imagelist ? imagelist.map((imageUrl,index)=>{
            return <img  className='tile' key={imagelist[index]} src={imageUrl} alt= {"image"+index}></img>
        }):"hello"}
    </div>
  )
}
