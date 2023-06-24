import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Action from './Action';


export default function Users(props) {
    const [flag,setFlag] = useState(false);

    const action = ()=>
    {
        if(flag === true)
        {return <Action user = {props.usersArr} setFlag={setFlag}/>}
    }

    const nav = useNavigate()
    
  return (
    <div className='menuDiv'>
        <h1 className='welcome'>Welcome </h1>
        <h1 className='userName'>{props.usersArr.user}</h1>

        <button className='Menu' onClick={()=>{alert('your balance is' + ' ' + props.usersArr.money)}} >Balance</button>
        <button className='Menu' onClick={()=>{setFlag(!flag)}} >Action</button>
        {action()}
        <button className='Menu' onClick={()=>{nav('/edit')}} >Edit</button>
        <button className='Menu' onClick={()=>{nav('/')}} >Exit</button>

    </div>
  )
}
