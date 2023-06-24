import React, { useState } from 'react'
import AdminUser from './AdminUser'

export default function Admin(props) {
    const[flag,setFlag] = useState(false)

    const returnPayment = (idx)=>
    {
        let sum;
        sum = Number(props.val.money) + Number(props.val.moneyOut[idx].moneyPaied) 
        props.val.money = sum
        return props.val.money
    }

    const paymentDelete = (idx)=>
  {
    returnPayment(idx)
    props.val.moneyOut.splice(idx,1)
    setFlag(false)
  }
    const openUser = ()=>
    {
        if(flag === true){
            props.setUsers(props.idx)
            return props.val.moneyOut.map((val,idx)=>
            {
                return <AdminUser  val = {val} idx={idx} paymentDelete={paymentDelete}/>
            })
        }
    }


    const userDeleted = ()=>
    {
        if(flag === true)
        {
            setFlag(!flag)
            return props.userDelete(props.idx)
        }
    }
    const deleteUser = ()=>
    {
        if(flag === true)
        {
            return <button className='EnterButton' onClick={userDeleted}>Delete User</button>
        }
    }
  return (
    <div style={{marginBottom:'10%'}}>
        <h1 className='userName' style={{fontSize:'30px'}}>{props.val.user} <br /> {props.val.id}</h1><button className='EnterButton' onClick={()=>{setFlag(!flag)}}>Info</button>
        
        {openUser()}
        {deleteUser()}
        
    </div>
  )
}
