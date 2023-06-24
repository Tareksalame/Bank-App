import React, { useState } from 'react'

export default function Action(props) {
    const[money,setMoney] = useState(0);
    const[company,setCompany] = useState('')

    const moneyminus = ()=>
    {
        let sum;
        sum = props.user.money - money
        props.user.money = sum
        return props.user.money
    }
    const buy = ()=>
    {
        if(props.user.money <= 0 || (props.user.money - money) < 0)
        {
            alert('You do not have enough money to buy from this company')
        }
        else
        {
            props.setFlag(false)
            props.user.moneyOut.push({companyName : company , moneyPaied: money});
            moneyminus()
        }
    }
  return (
    <div className='actionDiv'>
        <input className='mainInput' onChange={(e)=>{setMoney(e.target.value)}}   style={{marginBottom:'5%'}} placeholder='Amount Of Money' type="number" />
        <input className='mainInput' onChange={(e)=>{setCompany(e.target.value)}} style={{marginBottom:'5%'}} placeholder='Company Name' type="text" />
        <button className='EnterButton' style={{marginBottom:'5%'}} onClick={buy}>Buy</button>
    </div>
  )
}
