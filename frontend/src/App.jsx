import React from 'react'
import SignIn from "./pages/signIn.jsx"
import SignUp from './pages/signUp.jsx'
import Customize from "./pages/Customize.jsx"
import {Routes,Route} from "react-router-dom"
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { userDataContext } from './context/UserContext.jsx'
import Customize2 from "./pages/Customize2.jsx"
import Home from './pages/Home.jsx'
function App() {
  const {userData,setUserData}=useContext(userDataContext)
  return (
    <div>
      <Routes>
         <Route path="/" element={(userData?.assistantImage && userData?.assistantName)?<Home/>:<Navigate to={"/customize"}/>}/>
        <Route path="/signup" element={!userData?<SignUp/>:<Navigate to={"/"}/>}></Route>
        <Route path="/signin" element={!userData?<SignIn/>:<Navigate to={"/"}/>}></Route>
        <Route path="/customize" element={userData?<Customize/>:<Navigate to={"/signin"}/>}></Route>
        <Route path="/customize2" element={userData?<Customize2/>:<Navigate to={"/signin"}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
