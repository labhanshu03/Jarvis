import User from "../models/usermodel.js"
import uploadOnCloudinary from "../config/cloudinary.js"
import geminiResponse from "../gemini.js"
import moment from "moment/moment.js"
import { response } from "express"

export const getCurrentUser=async(req,res)=>{
    try{
           const userId=req.userId
           const user=await User.findById(userId).select("-password")
           if(!user){
            return res.status(400).json({message:"user not found"})
           }
           return res.status(200).json(user)
    }catch(error){
        return res.status(400).json({message:"get current user error"})
    }

   
}

export const updateAssistance=async(req,res)=>{
    try{
        console.log("af")
         const {assistantName,imageUrl}=req.body
         let assistantImage;

        if(req.file){
            assistantImage=await uploadOnCloudinary(req.file.path)

        }else{
            assistantImage=imageUrl
        }
         const user =await User.findByIdAndUpdate(req.userId,{assistantName,assistantImage},{new:true}).select("-password")
    return res.status(200).json(user)
         
    }catch(error){
          
    }
}


export const askToAssistant=async(req,res)=>{
    
 
    try{
        const {command}=req.body
        const user=await User.findById(req.userId)
        const userName=user.name
        const assistantName=user.assistantName

        console.log("user controller reached")
       
        const result=await geminiResponse(command,assistantName,userName)
        console.log(result +"this is in result of user controller")

       
        const jsonMatch=result.match(/{[\s\S]*}/)  
        
        if(!jsonMatch){
          
            return res.status(400).json({response:"sorry i don't understant"})

        }      
        const gemResult =JSON.parse(jsonMatch[0])
         const type=gemResult.type

         switch(type){
            case "get-date":
                return res.json({
                    type,
                    userInput:gemResult.userInput,
                    response:`current date is ${moment().format("YYYY-MM-DD")}`
                })
            case "get-time":
                 return res.json({
                    type,
                    userInput:gemResult.userInput,
                    response:`current time is ${moment().format("hh:mmA")}`
                 })
            case "get-day":
                 return res.json({
                    type,
                    userInput:gemResult.userInput,
                    response:`today is ${moment().format("dddd")}`
                 })
            case "get-month":
                return res.json({
                    type,
                    userInput:gemResult.userInput,
                    response:` today is ${moment().format("MMMM")} `
                })
  case "google-search":
  case "youtube-play":
  case "general":
  case "calculator-open":
    case "instagram-open":
        case "facebook-open":
            case "weather-show":
            case "youtube-search":

            return res.json({
                type,
                userInput:gemResult.userInput,
                response:gemResult.response

            })

            default:
                res.status(400).json({response:"I didn't understand that command"})





         }

    }catch(error){
res.status(500).json({response:"ask assistant error"})
    }
}