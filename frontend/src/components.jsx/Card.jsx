import React from 'react'
import { userDataContext } from '../context/UserContext.jsx'
import { useContext } from 'react'

function Card({image}) {
     const {
            serverUrl,userData,setUserData,frontendImage,setFrontendImage,backendImage,setBackendImage,selectedImage,setSelectedImage
        } =useContext(userDataContext)
  return (
    <div className={` w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[blue] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 hover:border-4 cursor-pointer hover:border-white ${selectedImage==image?"border-4 border-white shadow-2xl shadow-blue-950":null}`} onClick={()=>{setSelectedImage(image);setBackendImage(null);setFrontendImage(null)}}>
        <img src={image}  className="h-full object-cover" alt="" />
      
    </div>
  )
}

export default Card
