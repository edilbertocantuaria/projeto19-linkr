import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


export default function TimelinePage() {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [inputUrl, setInputUrl] = useState('');
  const [inputArticle, setInputArticle] = useState('');

  const handlePublish = () => {
    setIsPublishing(true);

    // trocar por requisição assíncrona de post do banco
    setTimeout(() => {
      setIsPublishing(false);
      setInputUrl('');
      setInputArticle('');
    }, 1000);
  };
  const handleLike = () => {
    setIsFilled(!isFilled);
    setLikesCount(isFilled ? likesCount - 1 : likesCount + 1);
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;

    if (field === 'url') {
      setInputUrl(value);
    } else if (field === 'article') {
      setInputArticle(value);
    }
  };

  return (
    <>
      <Container>
        <TimelineContainer>
          <Title>timeline</Title>
          <PublishContainer>
            <img
              src="https://yt3.ggpht.com/a/AATXAJw_Xyu7KMjEEeLFaFgSQeQk84Bj6GQqDeLd3w=s900-c-k-c0xffffffff-no-rj-mo"
              alt="Foto do Usuário"
            />
            <FormPublishContainer>
              <p>What are you going to share today?</p>
              <form>
                <input
                  placeholder="http://..."
                  value={inputUrl}
                  onChange={(e) => handleInputChange(e, 'url')}
                  disabled={isPublishing}
                />
                <input
                  placeholder="Awesome article about #javascript"
                  value={inputArticle}
                  onChange={(e) => handleInputChange(e, 'article')}
                  disabled={isPublishing}
                />
                <button onClick={handlePublish} disabled={isPublishing}>
                  {isPublishing ? 'Publishing...' : 'Publish'}
                </button>
              </form>
            </FormPublishContainer>
          </PublishContainer>
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
      </Container>
    </>
  );
}

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

const Container = styled.div`
  background-color: #333333;
  min-height: calc(100vh - 72px);
  height: calc(100% - 72px);
  display: flex;
  justify-content: center;
`;

const TimelineContainer = styled.div`
  width: 611px;
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

const PublishContainer = styled.div`
  background-color: white;
  min-height: fit-content;
  border-radius: 16px;
  display: flex;
  padding: 15px;
  gap: 15px;
  margin-bottom: 29px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

const FormPublishContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
    margin-bottom: 30px;
    input {
      background-color: #efefef;
      border: none;
      border-radius: 5px;
      padding-left: 10px;
      &:nth-child(1) {
        min-height: 30px;
        ::placeholder {
          position: absolute;
          top: 7px;
        }
      }
      &:nth-child(2) {
        min-height: 66px;
        ::placeholder {
          position: absolute;
          top: 7px;
        }
      }
    }

    button {
      width: 112px;
      height: 31px;
      position: absolute;
      right: 0;
      bottom: -35px;
      border: none;
      border-radius: 5px;
      background-color: #1877f2;
      color: white;
      cursor: pointer;
    }
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
