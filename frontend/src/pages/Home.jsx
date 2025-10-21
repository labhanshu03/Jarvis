import React, { useContext, useEffect } from 'react'
import { userDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import {useState }from "react"
import { useRef } from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import userImg from "../assets/user.gif"
import aiImg from "../assets/ai.gif"


function Home() {
  const {userData,serverUrl,setUserData,getGeminiResponse}=useContext(userDataContext)
  const navigate=useNavigate()
  const buttonref=useRef(null)
  const [listening,setListening]=useState(false);
  const isSpeakingRef=useRef(false)
  const recognitionRef=useRef(null)
  const [ham,setHam]=useState(false)
  const synth=window.speechSynthesis
  const isRecognizingRef=useRef(false)
  const [aiText,setAiText]=useState("")
  const [userText,setUserText]=useState("")




  const handleLogOut=async()=>{

    try{
      const result=await axios.post(`${serverUrl}/api/auth/logout`,{},{withCredentials:true})
      setUserData(null)
      navigate("/signin")
    }catch(error){
    setUserData(null)
    console.log(error)
    }
  }

  const startRecognition=()=>{
    if(!isSpeakingRef.current && !isRecognizingRef.current){
      try{
        recognitionRef.current?.start();
        console.log("recognition requested to start")
      }catch(error){
        if(error.name!=="InvalidStateError"){
          console.log("start error",error);
        }
      }
    }
  }
  


  const speak1=(text)=>{
    const greeting=new SpeechSynthesisUtterance(text)
    greeting.lang="hi-IN"
    
    window.speechSynthesis.speak(greeting)
  }
  
  const speak=(text)=>{
    
    const utterance  =new SpeechSynthesisUtterance(text)
    utterance.lang="hi-IN"
    console.log(utterance)
    const voices=window.speechSynthesis.getVoices()
    const hindiVoice=voices.find(v=>v.lang==='hi-IN')
    if(hindiVoice){
      utterance.voice=hindiVoice
    }
        isSpeakingRef.current=true

         utterance.onend=()=>{
          setAiText("");
      isSpeakingRef.current=false
      recognitionRef.current?.start()
      setTimeout(()=>{
        startRecognition()
      },800)

    }
    synth.cancel()
    synth.speak(utterance)

    // utterance.onerror = (e) => {
    // console.error("Speech error:", e);
  };
 

   
  
  

  const handlecommand=(data)=>{
    const {type,userInput,response}=data
    speak(response)

    if(type==="google-search"){
    const query=encodeURIComponent(userInput)
     window.location.href=`https://www.google.com/search?q=${query}`
    }

    if(type==="calculator-open"){
   
      window.location.href=`https://www.google.com/search?q=calculator`
    }

    if(type==="instagram-open"){
      
      window.location.href="https://www.instagram.com/","_blank"
    }

    if(type==="facebook-open"){
     
      window.location.href="https://www.facebook.com/","_blank"
    }

    if(type==="weather-show"){
         
      window.location.href="https://www.google.com/search?q=weather"
    }

    if(type==="youtube-search" || type==="youtube-play"){
      if(userInput ==""){
        window.location.href=`https://www.youtube.com/`
      }else{
      const query=encodeURIComponent(userInput)
      console.log("lasdaf")
      window.location.href = `https://www.youtube.com/results?search_query=${query}`;
     
      }
     
    }
  }

  useEffect(()=>{
          
          
          const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
          const recognition=new SpeechRecognition()
          recognition.continuous=true
          recognition.lang="en-US"
          recognition.interimResults = false;

          recognitionRef.current=recognition
          let isMounted=true

          const startTimeout=setTimeout(()=>{
              if(isMounted && !isSpeakingRef.current && !isRecognizingRef.current){
                try{
                  recognition.start();
                   console.log("Recognition requested to start")
                }catch(e){
                  if(e.name!=="InvalidStateError"){
                    console.log(e)
                  }

                }
              }
          },1000)

          recognition.onstart=()=>{
            isRecognizingRef.current=true
            setListening(true)
          }
          
          recognition.onend=()=>{
            isRecognizingRef.current=false
            setListening(false)
            if(!isMounted && !isSpeakingRef.current){
              setTimeout(()=>{
                if(isMounted){
                      try{
                        recognition.start();
                        console.log("recognition restarted")
                      }catch(e){
                        if(e.name!=="InvalidStateError"){
                          console.error(e)
                        }
                      }
                }
              },1000)
            }
          }




          recognition.onresult=async (e)=>{
         
            const transcript=e.results[e.results.length-1][0].transcript.trim()
            
            console.log(transcript)

             if(transcript?.toLowerCase().includes(userData?.assistantName.toLowerCase())){
              setAiText("")
              setUserText(transcript)
              recognition.stop()
              isRecognizingRef.current=false
              setListening(false)

              const data=await getGeminiResponse(transcript)
              console.log(data)
              handlecommand(data)
              setAiText(data.response)
              setUserText("")
             }
          }
        
          recognition.onerror=(event)=>{
            console.warn("recognition error",event.error)
            isRecognizingRef.current=false
            setListening(false)
            if(event.error!=="aborted" &&isMounted && !isSpeakingRef.current){
              setTimeout(()=>{
                    if(isMounted){
                      try{
                        recognition.start()
                        console.log("recognition restarted after error")
                      }catch(error){
                        if(e.name!=="InvalidStateError") console.error(e)
                      }
                    }
                    
              },1000)
            }
          }


         return ()=>{
          isMounted=false
          clearTimeout(startTimeout)
          recognition.stop()
          setListening(false)
          isRecognizingRef.current=false
          
         }

         
  },[userData])

  


  return (

  <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#02023d] flex justify-center items-center flex-col  gap-[15px] overflow-hidden max-w-screen'>
    <CgMenuRight onClick={()=>setHam(true)}  className='lg:hidden text-white absolute top-[20px] right-[20px] w-[25px] h-[25px] ' />
   
    <div className={`fixed lg:hidden top-0 w-full h-full bg-[#00000053] backdrop-blur-lg p-[20px] flex flex-col gap-[20px] items-start ${ham?"translate-x-0":"translate-x-full"} transition-transform`}>
 <RxCross1  onClick={()=>setHam(false)} className=' text-white absolute top-[20px] right-[20px] w-[25px] h-[25px] ' />
    <button className='min-w-[150px]  h-[60px] text-black font-semibold bg-white rounded-full text-[19px] cursor-pointer ' onClick={handleLogOut}>Log Out</button>
    <button className='min-w-[150px] h-[60px]  text-black font-semibold bg-white rounded-full text-[19px]   px-[20px] py-[10px] cursor-pointer ' onClick={()=>navigate("/customize")} >Customize your Assistant</button>
  <div className='w-full h-[2px] bg-gray-400'></div>

  <h1 className='text-white font-semibold text-[19px]'>History</h1>
  <div className='w-full h-[400px] overflow-y-auto flex flex-col gap-[20px] '>
    {userData.history?.map((his,ind)=>{
         return <span key={ind} className='text-gray-200 text-[18px] truncate '>{his}</span>
    })}
  </div>


    </div>
    <button className='min-w-[150px] h-[60px] text-black font-semibold bg-white rounded-full text-[19px] absolute hidden lg:block top-[20px] right-[20px] cursor-pointer' onClick={handleLogOut}>Log Out</button>
    <button className='min-w-[150px] h-[60px] text-black font-semibold bg-white rounded-full text-[19px] absolute hidden lg:block top-[100px] right-[20px] px-[20px] py-[10px] cursor-pointer' onClick={()=>navigate("/customize")} >Customize your Assistant</button>


     <div className='w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-4xl shadow-lg'>
      <img src={userData?.assistantImage} alt="" className="h-full object-cover"/>
</div>

<h1 className='text-white text-[18px] font-semibold'>I'm {userData?.assistantName}.Say commands like "hey ,{userData?.assistantName} open youtube and search cricket on it" always use {userData?.assistantName} in commands </h1>
{!aiText && <img src={userImg} alt="" className='w-[200px]'/>}
{aiText && <img src={aiImg} alt="" className='w-[200px]'/>}
<h1 className="text-white text-[18px] font-semibold text-wrap">{userText?userText:aiText?aiText:null}</h1>
<button className="min-w-[300px] h-[60px] text-black font-semibold bg-white rounded-full text-[19px] mt-[20px] cursor-pointer"  onClick={()=>speak1(` hi ${userData.name} how can i help you today`)}>Click to Start</button>
    </div>

  )
}

export default Home









