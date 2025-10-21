import React, { useState,useContext } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { IoMdArrowRoundBack } from "react-icons/io";

  
function Customize2() {
    const {serverUrl,userData,backendImage,selectedImage,setUserData}=useContext(userDataContext)
    let navigate=useNavigate()
    const [loading,setLoading]=useState(false)





    const [assistantName,setAssistantName]=useState(userData?.assistantName || "")
        const handleUpdateAssistant=async()=>{
          setLoading(true)
         
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
       setLoading(false)
      }catch(error){
        setLoading(false)
                  console.log(error)
      }
    }
  return (
 <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px] relative'>
  <IoMdArrowRoundBack onClick={()=>navigate("/customize")} className='cursor-pointer absolute top-[30px] left-[30px] text-white w-[25px] h-[25px]'/>
    <h1 className='text-white mb-[40px] text-[30px] text-center'>Enter your <span className='text-blue-200' >Assistant Name</span></h1>
    <input type="text" onChange={(e)=>setAssistantName(e.target.value)} value={assistantName}  placeholder='eg. Jarvis' className='w-full max-w-[600px] h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]'/>
    {assistantName && <button className="min-w-[300px] h-[60px] text-black font-semibold bg-white rounded-full text-[19px] mt-[20px] cursor-pointer" disabled={loading} onClick={()=>{handleUpdateAssistant();navigate("/")}}>{!loading?"Finally create your assistant":"Loading..."}</button>}
      </div>
  )
}

export default Customize2
