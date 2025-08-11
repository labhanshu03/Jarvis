import React, { useState,useContext } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Customize2() {
    const {serverUrl,userData,backendImage,selectedImage,setUserData}=useContext(userDataContext)
    let navigate=useNavigate()



    const [assistantName,setAssistantName]=useState(userData?.assistantName || "")
        const handleUpdateAssistant=async()=>{
          console.log("jl")
      try{
        let formData=new FormData()
        formData.append("assistantName",assistantName)

        if(backendImage){
          formData.append("assistantImage",backendImage)
        }else{
          formData.append("imageUrl",selectedImage)
        }
        
       const result=await axios.post(`${serverUrl}/api/user/update`,formData,{withCredentials:true})
       console.log(result.data)
       setUserData(result.data)
      }catch(error){
                  console.log(error)
      }
    }
  return (
 <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]'>
    <h1 className='text-white mb-[40px] text-[30px] text-center'>Enter your <span className='text-blue-200' >Assistant Name</span></h1>
    <input type="text" onChange={(e)=>setAssistantName(e.target.value)} value={assistantName}  placeholder='eg. shifra' className='w-full max-w-[600px] h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]'/>
    {assistantName && <button className="min-w-[300px] h-[60px] text-black font-semibold bg-white rounded-full text-[19px] mt-[20px] cursor-pointer" onClick={()=>{handleUpdateAssistant();navigate("/customize2");}}>Finally create your assistant</button>}
      </div>
  )
}

export default Customize2
