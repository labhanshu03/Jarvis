import React from 'react'
import SignIn from "./pages/signIn.jsx"
import SignUp from './pages/signUp.jsx'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
      </Routes>
    </div>
  )
}

export default App
