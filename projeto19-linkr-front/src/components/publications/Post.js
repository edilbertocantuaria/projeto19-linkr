import React from 'react';
import {
    ContentContainer,
    PostContainer,
    UserImage,
    StyledHeartIcon,
    UserContainer,
    DataStyle,
    DataText
} from './style';

export default function Post({ post, isFilled, likesCount, handleLike }) {
    const handleDataStyleClick = () => {
        window.open(post.link, '_blank');
    };

    return (
        <PostContainer>
            <UserContainer>
                <UserImage
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
                <p>{post.article}</p>
                <DataStyle onClick={handleDataStyleClick}>
                    <DataText>
                        <p>{post.title}</p>
                        <p>{post.description}</p>
                        <p>{post.link}</p>
                    </DataText>
                    <img src={post.image} alt={post.description} />
                </DataStyle>
            </ContentContainer>
        </PostContainer>
    );
}

