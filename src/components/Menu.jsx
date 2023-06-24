import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Menu() {

    let nav = useNavigate()
  return (
    <div className='AdminDiv'>
        <h1 className='userName'>Admin <br />Panel </h1>
        <button className='exitButton' onClick={()=>{nav('/')}}>Exit</button>
    </div>
  )
}
