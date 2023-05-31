import styled, { keyframes } from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export const heartBeatAnimation = keyframes`
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

export const PostContainer = styled.div`
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

export const UserContainer = styled.div`
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

export const StyledHeartIcon = styled(({ isfilled, ...props }) =>
    isfilled ? <AiFillHeart {...props} /> : <AiOutlineHeart {...props} />
)`
  font-size: 17px;
  cursor: pointer;
  color: ${props => (props.isfilled ? 'red' : 'white')};
  animation: ${props => (props.isfilled ? heartBeatAnimation : 'none')} 0.5s
    ease-in-out;
`;

export const ContentContainer = styled.div`
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