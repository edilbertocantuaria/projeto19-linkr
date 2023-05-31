import styled, { keyframes } from 'styled-components';
import Header from "../../components/header/Header";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function HashtagPage() {
  const handleLike = () => {
    setIsFilled(!isFilled);
    setLikesCount(isFilled ? likesCount - 1 : likesCount + 1);
  };

  const [isFilled, setIsFilled] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  return (
    <>
      <Header />
      <Container>
        <TimelineContainer>
          <Title>#react</Title>
          <PostContainer>
            <UserContainer>
              <img
                src="https://yt3.ggpht.com/a/AATXAJw_Xyu7KMjEEeLFaFgSQeQk84Bj6GQqDeLd3w=s900-c-k-c0xffffffff-no-rj-mo"
                alt="Foto do Usuário"
              />
              <StyledHeartIcon
                isfilled={isFilled}
                onClick={handleLike}
              />
              <p>{likesCount} {likesCount === 1 ? 'like' : 'likes'}</p>
            </UserContainer>
            <ContentContainer>
              <h3>Bob Esponja</h3>
              <p>
                Vocês já pararam para pensar o quanto é estranho o Seu Sirigueijo
                vender hambúrger de Siri?
              </p>
              <div>Pesquisar biblioteca</div>
            </ContentContainer>
          </PostContainer>
        </TimelineContainer>
        <HashtagsContainer>
          <span>trending</span>
          <CustomHr/>
          <p>#BORA</p>
          <p>#BORA</p>
          <p>#BORA</p>
          <p>#BORA</p>
          <p>#BORA</p>
          <p>#BORA</p>
          <p>#BORA</p>
          <p>#BORA</p>
          <p>#BORA</p>
          <p>#BORA</p>
        </HashtagsContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #333333;
  min-height: calc(100vh - 72px);
  height: calc(100% - 72px);
  display: flex;
  justify-content: center;
  gap: 25px;
`;

const TimelineContainer = styled.div`
  width: 611px;
`;

const HashtagsContainer = styled.div`
  width: 301px;
  height: 406px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: white;
  background-color: #171717;
  border-radius: 16px;
  margin-top: 160px;
  padding: 15px;
  p{
    font-size: 19px;
    margin-bottom: 5px;
    font-family: 'Lato';
    line-height: 23px;
  }
  span{
    font-size: 27px;
    font-family: 'Oswald';
    line-height: 40px;
  }
`;
const CustomHr=styled.hr`
  border: 1px solid #484848;
  margin-top: 12px;
  margin-bottom: 22px;
`;
const Title = styled.h1`
  color: white;
  font-family: 'Oswald';
  font-size: 43px;
  font-weight: 700;
  margin-bottom: 43px;
  margin-top: 78px;
  @media (max-width: 600px) {
    margin-left: 17px;
    margin-top: 43px;
    margin-bottom: 26px;
  }
`;

const heartBeatAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const PostContainer = styled.div`
  display: flex;
  color: white;
  background-color: #171717;
  border-radius: 16px;
  padding: 15px;
  gap: 15px;
  margin-bottom: 16px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 17px;
  }
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    margin-top: 15px;
  }
`

const StyledHeartIcon = styled(({ isfilled, ...props }) =>
  isfilled ? <AiFillHeart {...props} /> : <AiOutlineHeart {...props} />
)`
  font-size: 17px;
  cursor: pointer;
  color: ${props => (props.isfilled ? 'red' : 'white')};
  animation: ${props => (props.isfilled ? heartBeatAnimation : 'none')} 0.5s
    ease-in-out;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Lato';
  font-weight: 400;
  gap: 7px;
  h3 {
    font-size: 19px;
    line-height: 23px;
  }
  p {
    font-size: 17px;
    line-height: 20px;
  }
  div {
  }
`;