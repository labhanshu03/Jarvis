import express from "express"
import { Login, logOut, signUp } from "../controllers/auth.controllers.js"
import { getCurrentUser, updateAssistance } from "../controllers/user.controllers.js"
import isAuth from "../middlewares/isAuth.js"
import upload  from "../middlewares/multer.js"

const userRouter=express.Router()

userRouter.get("/current",isAuth,getCurrentUser)
userRouter.post("/update",isAuth,upload.single("assistanceImage"),updateAssistance)  // here multer will if a image with name assistancImage comes it will put it into req.file and will save it in public 
export default userRouter