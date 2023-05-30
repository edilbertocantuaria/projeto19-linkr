import React from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>linkr</Logo>
            <UserContainer>
                <UserName>Bob Esponja</UserName>
                <UserImage src="https://yt3.ggpht.com/a/AATXAJw_Xyu7KMjEEeLFaFgSQeQk84Bj6GQqDeLd3w=s900-c-k-c0xffffffff-no-rj-mo" alt="Foto do Usuário" />
                <FiChevronDown />
            </UserContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  background-color: #151515;
  padding: 0 20px;
  color: white;
`;

const Logo = styled.h2`
  font-family: 'Passion One';
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
  letter-spacing: 0.05em;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
`;

const UserName = styled.p`
  margin-right: 10px;
  font-family: 'Oswald';
  font-weight: 400;
  font-size: 16px;
  line-height: 64px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;