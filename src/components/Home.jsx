import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
    const nav = useNavigate()
    const[user,setUser] = useState('')
    const[password,setPassword] = useState('')

    const find = ()=>
    {
        props.usersArr.find((val,idx)=>
        {
            if((val.user === user) && (val.userPassword === password))
            {
                props.setUsers(idx)
                nav('/user')
            }
        })
    }
//     const findUser = ()=>
//   {
//     props.usersArr.filter((val,idx)=>
//     {
//       if(val.user.includes(user)==true && val.userPassword.includes(password)==true)
//       {
//           props.setUsers(idx)
//           nav('/user')
//         }
        
//     })
//   }
    const check = ()=>
  {
    if(user === 'admin' && password === 'admin')
    {
        props.setFlag(true)
        nav('/admin')
    }
    else
    {
        find();
        props.setFlag(false)
    }
  }
  return (
    <div style={{marginTop:'30%'}}>
        {props.setFlag(false)}
        <input className='mainInput' onChange={(e)=>{setUser(e.target.value)}} type="text" placeholder='UserName' /><br /><br />
        <input className='mainInput' onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
        <h2 className='newuser'>Don't have a user ?</h2>
        <h3 className='createNewUser' onClick={()=>{nav('/newuser')}}>Join Our Bank</h3>
        <button className='EnterButton' onClick={check}>Enter</button>
    </div>
  )
}
