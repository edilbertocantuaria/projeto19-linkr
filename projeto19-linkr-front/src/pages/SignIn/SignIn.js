import styled from "styled-components"




export default function SignIn(){
    return(
      
        <ContainerSignIn>
           <Left>
           <h1>linkr</h1>
           <p>save, share and discover<br/> the best links on the web</p>

           </Left>
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
        <p >First time? Create an account!</p>
           
           </Right>

        </ContainerSignIn>
        
    )
            
}

const ContainerSignIn = styled.main`
display: flex;

`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;


height: 100vh;
width: 60vw;
background-color: black;

    h1{

        margin-left: 100px;
        font-family: 'Passion One', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size:106px;
        color: white;
        line-height: 117px;
        /* identical to box height */

        letter-spacing: 0.05em;
    }

    p{
        margin-left: 100px;
        font-family: 'Oswald', sans-serif;
        font-size:43px;
        font-weight: bold;
        color: white;
        margin-bottom: 150px;

    }

`

const Right = styled.div`


display: flex;
align-items: center;
text-align: center;
margin: 0 auto;
background-color: #333333;
width: 40vw;
height: 100vh;
flex-direction: column;
justify-content: center;

  input {
    margin-top: 13px;
    background-color: #FFF;
    width: 429px;
    height: 65px;
    border: none;
    border-radius: 6px;
    font-family: 'Oswald', sans-serif;
    font-size: 27px;
    font-weight: 700;
    padding-left: 17px;
    padding-bottom: 6px;
    outline: none;
    &::placeholder {
      color: #9F9F9F;
    }
  }
  button {
    margin-top: 13px;
    width: 430px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1877F2;
    border: none;
    border-radius: 6px;
    color: #FFF;
    font-family: 'Oswald', sans-serif;
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 6px;
    cursor: pointer;
        }
  p {
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    color: #FFF;
    margin-top: 22px;
    text-decoration: underline;
    cursor: pointer;
    }

`