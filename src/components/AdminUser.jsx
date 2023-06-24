import React from 'react'

export default function AdminUser(props) {

    const paymentDeleted = ()=>
    {
        props.paymentDelete(props.idx)
    }
    
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center' , marginBottom:'0%'}}>
        <h1 className='welcome' style={{border:'3px solid  rgb(141, 0, 0)', width:'50%', borderRadius:'50px'}}>{props.val.companyName} <br /> {props.val.moneyPaied} </h1>
        <br />
        <button style={{margin:'0px'}} className='exitButton' onClick={paymentDeleted}>X</button><br />
    </div>
  )
}
