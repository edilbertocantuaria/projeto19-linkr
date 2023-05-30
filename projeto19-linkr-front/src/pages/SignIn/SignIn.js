import { Right, ContainerSign } from "./style.js"
import Banner from "../../components/banner/banner.js"
import { useNavigate } from 'react-router-dom';

export default function SignIn(){

  const navigate = useNavigate()

    return(  
        <ContainerSign>
         <Banner/>
           <Right>
           <form >
           <input
            placeholder="e-mail"
            type="email"
          />
          <input
            placeholder="password"
            type="password"
            autoComplete="current-password"
          />
          <button type="submit" >
            Log In
          </button>
        </form>
        <p onClick={() => navigate('/sign-up')}>First time? Create an account!</p>     
           </Right>
        </ContainerSign>
        
    )
            
}