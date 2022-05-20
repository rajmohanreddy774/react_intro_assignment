
import React, { useState } from 'react'
import "./contact.css"

export const ContactCard = (props) => {

  const [isActive , setIsActive]=useState(false);
    const{Name,Email,Phone,img}=props
  return (
    
    <div>
      
    <div onClick={()=>setIsActive(!isActive)} className='box'>
      <div>{Name}</div>
      <div>{Email}</div>
      <div><img className='imgclass' src={img} alt="imge" /></div>
      {isActive &&  <div>{Phone}</div>}      
    </div>
    </div>
  )
}

