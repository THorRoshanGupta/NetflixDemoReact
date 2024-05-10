import { ContextApp } from './ContextApp';
import React, { useContext } from 'react'

export default function GetSourceTrailer(typ) {
  const trailers = require.context('../../assets/Trailers', true);  
  const trailersvid=trailers.keys().map(x=>trailers(x))
  const {preview}=useContext(ContextApp)
    const images1 = require.context('../../assets/imagesHome1', true);
   console.log(typeof images1)
    const imagelist=images1.keys().map(x=>images1(x))

  if(typ=='trailer'){
    if(trailersvid.length>=(preview-1)){
        console.log(trailersvid[preview])
        return trailersvid[preview]
    }
  }
  else if(typ=='poster'){
     if(imagelist.length>=(preview-1)){
        console.log(trailersvid[preview])
        return imagelist[preview]
    }
  }
  
 
}
