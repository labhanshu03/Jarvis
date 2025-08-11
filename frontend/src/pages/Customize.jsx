import React,{useContext} from 'react'
import Card from '../components.jsx/Card'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.jpeg"
import { RiImageAddLine } from "react-icons/ri";
import { useRef ,useState} from 'react'
import { userDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
function Customize() {
     const {
        serverUrl,userData,setUserData,frontendImage,setFrontendImage,backendImage,setBackendImage,selectedImage,setSelectedImage
    } =useContext(userDataContext)
    const inputImage=useRef()
    const navigate=useNavigate()

    const handleImage=(e)=>{
        console.log(e.target.files[0]+" jkl;j")
        const file=e.target.files[0]
        setBackendImage(file)
        setFrontendImage(URL.createObjectURL(file))
    }


  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]'>
        <h1 className='text-white text-[30px] mb-[30px] text-center'>Select your <span className="text-blue-200 ">Assistant Image</span> </h1>
        <div className='w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px] m'>
<Card image={image1}></Card>
<Card image={image2}></Card>
<Card image={image3}></Card>
<Card image={image4}></Card>
<Card image={image5}></Card>
<Card image={image6}></Card>
<Card image={image7}></Card>
    <div className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[blue] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 hover:border-4 cursor-pointer hover:border-white flex items-center justify-center ${selectedImage=="input"?"border-4 border-white shadow-2xl shadow-blue-950":null}`} onClick={()=>{inputImage.current.click();setSelectedImage("input")}}>
       {!frontendImage &&<RiImageAddLine className="text-white w-[25px] h-[25px] "/> } 
       {frontendImage && <img src={frontendImage} className='h-full object-cover '/>}
      
    </div>
    </div>
    <input type="file" accept="image/*" hidden ref={inputImage} onChange={handleImage}/>
    {selectedImage &&  <button className="min-w-[150px] h-[60px] text-black font-semibold bg-white rounded-full text-[19px] mt-[20px] cursor-pointer" onClick={()=>navigate("/customize2")}>Next</button>
 }
   
      
    </div>
  )
}

export default Customize
