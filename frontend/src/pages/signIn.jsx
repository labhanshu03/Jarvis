import React from 'react'
import bg from "../assets/authBg.png"
import { IoEyeSharp } from "react-icons/io5";
import { useState } from 'react';
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { userDataContext } from "../context/UserContext.jsx"
import { useContext } from 'react';
import axios from "axios"


function signIn() {
    const [showPassword,setShowPassword]=useState(false)
    const navigate=useNavigate()
    const {serverUrl,userData,setUserData}=useContext(userDataContext)

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [err,setErr]=useState("")
    const [loading,setLoading]=useState(false)

    const handleSignIn=async(e)=>{

         e.preventDefault()
         setErr("")
         setLoading(true)
         try{
            
        let result =await axios.post(`${serverUrl}/api/auth/signin`,{name,email,password},{withCredentials:true})
        console.log(result.data)
        setUserData(result.data)
         setLoading(false)
         navigate("/")
          }catch(error){
               console.log(error)
               setErr(error.response.data.message)
               setLoading(false)
               setUserData(null)
          }

    }
  return (
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center' style={{backgroundImage:`url(${bg})`}} >
        <form onSubmit={handleSignIn} className='w-[90%] h-[600px] max-w-[500px] bg-[#00000069] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px]'>
            <h1 className='text-white text-[30px] font-semibold'>Sign In to<span className='text-blue-400'>Virtual Assistant</span></h1>

<input type="email" value={email} onChange={(e)=>{ setEmail(e.target.value)}}  placeholder='Email' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]'/>
 
<div className='w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full text-[18px] relative'>
    <input type={showPassword?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className='w-full h-full rounded-full outline-none bg-tranparent placeholder-gray-300 px-[20px] py-[10px]'/>
  { !showPassword && <IoEyeSharp className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-[white]' onClick={()=>setShowPassword(true)}/>}
  {showPassword &&<IoEyeOff className='absolute top-[18px] right-[20px] w-[25px] h-[25px] text-[white]' onClick={()=>setShowPassword(false)}/>}
</div>
{err.length>0 && <p className='text-[17px] text-red-500'>{err}</p>}
<button className='min-w-[150px] h-[60px] text-black font-semibold bg-white rounded-full text-[19px]' disabled={loading}>{loading?"Loading...":"Sign In"}</button>
<p className='text-[white] text-[18px] cursor-pointer ' onClick={()=>{navigate("/signup");console.log("labh")}}>Want to create a new account<span className='text-blue-400'>Sign Up</span></p>

        </form>

      
    </div>
  )
}

export default signIn
