import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewUser(props) {
    const nav = useNavigate()
    const[id,setId] = useState()
    const[userName,setUserName] = useState('')
    const[password,setPassword] = useState('')
    const[confirm,setConfirm] = useState('')
    const[money,setMoney] = useState()

    // const find = ()=>
    // {
    //     props.usersArr.find((val,idx)=>
    //     {
    //         if((val.user == userName) && (val.userPassword == password))
    //         {
    //             props.setUsers(idx)
    //             nav('/user')
    //         }
    //     })
    // }

    const create = ()=>
    {
        if(id.length !== 9)
        {
            alert('id must be 9 numbers')
        }
        else if(userName.length < 4)
        {
            alert('Name must be more than 4 letters')
        }
        else if(password.length < 6)
        {
            alert('Password must be more than 6 letters')
        }
        else if(confirm !== password)
        {
            alert('confirmation must be the same password')
        }
        else if(money < 0 || money > 1000000)
        {
            alert('money must be between 0 - 1000000')
        }
        else
        {
            props.usersArr.push(
                {user : userName ,userPassword: password,id: id, money: money , moneyOut :[]}
            )
            nav('/')
        }
    }


  return (
    <div style={{marginTop:'30%'}}>
        <h1 className='newuser'>Register</h1>
        <br />
        <input className='mainInput' onChange={(e)=>{setId(e.target.value)}} placeholder='ID' type="text" />
        <br />
        <input className='mainInput' onChange={(e)=>{setUserName(e.target.value)}} placeholder='UserName' type="text" />
        <br />
        <input className='mainInput' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' type="password" />
        <br />
        <input className='mainInput' onChange={(e)=>{setConfirm(e.target.value)}} placeholder='Confirm Password' type="password" />
        <br />
        <input className='mainInput' onChange={(e)=>{setMoney(e.target.value)}} placeholder='Money' type="text" />
        <br />
        <button className='EnterButton' onClick={create}>Create</button>
    </div>
  )
}
