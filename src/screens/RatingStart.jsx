import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export function RatingStart() {
    const nav = useNavigate();
    useEffect(() => {
      byebye()
    }, [])
    
    function byebye(){
        
      nav("/0")
    }

  return (
    <div>no</div>
  )
}
