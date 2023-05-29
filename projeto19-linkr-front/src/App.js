import { BrowserRouter, Routes, Route } from "react-router-dom"

//import SignIn from "./pages/SignIn"

export default function App() {

  return (

    <PagesContainer>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
          
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  
`
