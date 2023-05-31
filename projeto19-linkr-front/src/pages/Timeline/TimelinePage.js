import React, { useState } from 'react';
import apiPosts from '../../services/apiPosts.js';
import {
  Container,
  FormPublishContainer,
  PublishContainer,
  TimelineContainer,
  Title
} from './style.js';
import Post from '../../components/publications/Post.js';


export default function TimelinePage() {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [form, setForm] = useState({ link: '', article: null });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPublishing(true);

    try {
      const response = await apiPosts.postLink(form);
      setIsPublishing(false);
      setForm({ link: '', article: null });
      console.log(response.data);
    } catch (error) {
      setIsPublishing(false);
      console.log(error.response.data);
    }
  };

  const handleLike = () => {
    setIsFilled(!isFilled);
    setLikesCount(isFilled ? likesCount - 1 : likesCount + 1);
  };

  return (
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
            <form onSubmit={handleSubmit}>
              <input
                placeholder="http://..."
                name="link"
                value={form.link}
                onChange={handleForm}
                disabled={isPublishing}
              />
              <input
                placeholder="Awesome article about #javascript"
                name="article"
                value={form.article || ''}
                onChange={handleForm}
                disabled={isPublishing}
              />
              <button type="submit" disabled={isPublishing}>
                {isPublishing ? 'Publishing...' : 'Publish'}
              </button>
            </form>
          </FormPublishContainer>
        </PublishContainer>
        <Post
          isFilled={isFilled}
          likesCount={likesCount}
          handleLike={handleLike}
        />
      </TimelineContainer>
    </Container>
  );
}
