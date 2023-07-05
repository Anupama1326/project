import React from 'react'
import final from '../Images/final.jpg'


export default function Login() {
  return (
    <div className='Outer-Layout'>
      <div className='Left-Side'>
      <img className='Left-Image' src={final} alt='logo'/>
      </div> 
      <div className='Right-Side'>
        <label htmlFor='user'>User-Id</label>
        <br/>
        <input className='Input-Size' type="text" id="user" />
        <div className='mt-10'></div>
        <label htmlFor='password'>Password</label>
        <br/>
        <input className='Input-Size' type="text" id="password" />
      </div> 
    </div>
  )
}