import React, { useEffect,useState } from 'react'
import { createContext } from 'react'

import axios from "axios"
import { IoTrophy } from 'react-icons/io5'


export const userDataContext=createContext()
function UserContext({children}) {
    const serverUrl="https://virtualassistant-backend-rh1h.onrender.com"
    const [userData,setUserData]=useState(null)
       const [frontendImage,setFrontendImage]=useState(null)
        const [backendImage,setBackendImage]=useState(null)
        const [selectedImage,setSelectedImage]=useState(null)

    const handleCurrentUser=async()=>{
      try{
        const result=await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
        setUserData(result.data)
        console.log(result.data)
      }catch(error){
         console.log(error)
      }
    }
    const getGeminiResponse=async(command)=>{
      try{
        console.log("isfasd")
        const result=await axios.post(`${serverUrl}/api/user/asktoAssistant`,{command},{withCredentials:true})
        return result.data

      }catch(error){
         console.log(error.message)
      }
    }

    useEffect(()=>{
handleCurrentUser()
    },[])


    const value={
        serverUrl,userData,setUserData,frontendImage,setFrontendImage,backendImage,setBackendImage,selectedImage,setSelectedImage,getGeminiResponse
    }
  return (
    <div>
        <userDataContext.Provider value={value}>
      {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
