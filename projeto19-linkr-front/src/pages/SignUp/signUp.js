import Banner from "../../components/banner/banner.js";
import { Right, ContainerSign } from "../SignIn/style.js";

import { useNavigate } from 'react-router-dom';

export default function SignUp (){

    const navigate = useNavigate()

    return (
        <ContainerSign>
        <Banner/>
        <Right>
        <form >
          <input
            placeholder="e-mail"
            data-test="email"
            type="email"
     
          />
          <input
            placeholder="password"
            data-test="password"
            type="password"
           
          />
          <input
            placeholder="username"
            data-test="username"
            type="text"

          />
          <input
            placeholder="picure url"
            type="url" 
          />
          <button type="submit">Sign Up</button>
        </form>
        <p data-test="login-link" onClick={() => navigate('/')}>Switch back to log in</p>
        </Right>
        </ContainerSign>
    )
}