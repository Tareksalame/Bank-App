import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Admin from './components/Admin';
import { useState } from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';
import Edit from './components/Edit';
import Menu from './components/Menu';


let usersArr = [
  {user:'tareq',userPassword:'1234' ,id: '333', money: 250 , moneyOut :[{companyName : 'nike' , moneyPaied: 100}]},
  {user:'malek',userPassword:'456',id: '333', money: 250 , moneyOut :[{companyName : 'nike' , moneyPaied: 100}]},
  {user:'kareem',userPassword:'012345',id: '333', money: 250 , moneyOut :[{companyName : 'nike' , moneyPaied: 100}]},
  {user:'hala',userPassword:'123456',id: '333', money: 250 , moneyOut :[{companyName : 'nike' , moneyPaied: 100}]},
  {user:'sara',userPassword:'12345',id: '333', money: 250 , moneyOut :[{companyName : 'nike' , moneyPaied: 100}]},
]
function App() {

  const[users,setUsers]= useState()
  const[flag,setFlag] = useState(false)
  
  const showMenu = ()=>
  {
    if(flag === true)
    {
      return <Menu/>
    }
    else
    {
      return <h1 className='mainSV'>SV Bank</h1>
    }
  }
  
  const userDelete = (idx)=>
  {  
    usersArr.splice(idx,1)
    setUsers()
  }
  

  return (
    <div className="App">
      <BrowserRouter>
      {showMenu()}
      <Routes>
        <Route path='/' element={<Home setFlag={setFlag} usersArr={usersArr} setUsers={setUsers} users ={users}/>} />
        <Route path='/admin' element={usersArr.map((val,idx)=>
          {
            return <Admin  userDelete={userDelete} usersArr={usersArr} idx={idx} setUsers={setUsers} val={val} users ={users}/>
          })}/>
        <Route path='/user' element={<Users usersArr={usersArr[users]} />}/>
        <Route path='/newuser' element={<NewUser usersArr={usersArr} userIndex ={usersArr[users]}/>}/>
        <Route path='edit' element={<Edit usersArr={usersArr[users]}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
