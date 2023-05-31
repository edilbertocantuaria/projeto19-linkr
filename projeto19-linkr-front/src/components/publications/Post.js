import React from 'react';
import {
    ContentContainer,
    PostContainer,
    StyledHeartIcon,
    UserContainer
} from './style';

export default function Post({ isFilled, likesCount, handleLike }) {
    return (
        <PostContainer>
            <UserContainer>
                <img
                    src="https://yt3.ggpht.com/a/AATXAJw_Xyu7KMjEEeLFaFgSQeQk84Bj6GQqDeLd3w=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="Foto do Usuário"
                />
                <StyledHeartIcon isfilled={isFilled} onClick={handleLike} />
                <p>
                    {likesCount} {likesCount === 1 ? 'like' : 'likes'}
                </p>
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
    );
}
