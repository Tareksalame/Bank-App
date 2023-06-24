import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Edit(props) {
    let nav = useNavigate()
    const [user,setUser] = useState(props.usersArr.user)
    const [password,setPassword] = useState(props.usersArr.userPassword)
    const [id,setID] = useState(props.usersArr.id)
    const [money,setMoney] = useState(props.usersArr.money)


    const submit = ()=>
    {
        if(id.length !== 9)
        {
            alert('id must be 9 numbers')
        }
        else if(user.length < 4)
        {
            alert('Name must be more than 4 letters')
        }
        else if(password.length < 6)
        {
            alert('Password must be more than 6 letters')
        }
        else if(money < 0 || money > 1000000)
        {
            alert('money must be between 0 - 1000000')
        }
        else{
        props.usersArr.user = user
        props.usersArr.userPassword = password
        props.usersArr.id = id
        props.usersArr.money = money
        nav('/user')
    }
    }
  return (
    <div className='EditDiv'>
        <h1 className='welcome'>Edit Your <br /> Informations</h1>
        <input className='mainInput' style={{marginBottom:'5%'}} type="text" placeholder={props.usersArr.user} onChange={(e)=>{setUser(e.target.value)}} />
        <input className='mainInput' style={{marginBottom:'5%'}} type="text" placeholder={props.usersArr.userPassword} onChange={(e)=>{setPassword(e.target.value)}} />
        <input className='mainInput' style={{marginBottom:'5%'}} type="text" placeholder={props.usersArr.id} onChange={(e)=>{setID(e.target.value)}} />
        <input className='mainInput' style={{marginBottom:'5%'}} type="text" placeholder={props.usersArr.money} onChange={(e)=>{setMoney(e.target.value)}} />
        <button className='EnterButton' onClick={submit}>Submit</button>
    </div>
  )
}
