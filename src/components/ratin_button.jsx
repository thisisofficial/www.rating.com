import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export function Ratin_button({num,curNum}) {

    function active(){
        return(
        <div className='circle active'>
            <p className='centered'>{num}</p>
        </div>  
        )
          
    }

    function innactive(){
        console.log(curNum)
        return(
        <Link to={{pathname: `/${num}`, state:{ratingScore:`${num}`}}} className="link">
        <div className='circle button'>
            
                <p className='centered'>{num}</p>
            
        </div>
        </Link>     
        )
    }
    

  return (
    <>
        {parseInt(curNum)==num?active():innactive()}
    </>
  )
}
