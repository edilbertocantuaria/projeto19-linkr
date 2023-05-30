import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn/SignIn.js"
import styled from "styled-components"
import Header from "./components/header/Header.js"

export default function App() {

  return (

    <PagesContainer>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />

        </Routes>

      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`

  background-color: red;


  
`
