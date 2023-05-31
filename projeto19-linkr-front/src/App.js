import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn/SignIn.js"
import styled from "styled-components"
import Header from "./components/header/Header.js"
import TimelinePage from "./pages/Timeline/TimelinePage.js"
import SignUp from "./pages/SignUp/signUp.js"

export default function App() {

  return (

    <PagesContainer>

      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>

      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  
`
