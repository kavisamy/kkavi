import React , {useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './Auth';
const Login = () => {
    const navigate=useNavigate()
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[userlist,setUserlist]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/User')
        .then(res=>setUserlist(res.data))
        .catch(err=>console.log(err))
    },[])
    const auth=useAuth()

    const handleLogin=()=>{
        const userExist=userlist.some(u=>u.username===username && u.password===password)
        if(userExist){
          auth.login(username)
            navigate('/')
        }
        else{
            alert("Invalid username or password")
        }
    }
  return (
   
        <div class="login-page">
    <div class="form" onSubmit={handleLogin}>
    <form class="login-form">
   
      <input type="text"placeholder="username" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
      <br></br><br></br>
      <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <br></br><br></br>
      <button>login</button>
      <br></br>
      <Link to="/signup">Don't have an account?Signup</Link>

    </form>
  </div>
</div>
  )
}
export default Login