import React from 'react';
import styled from 'styled-components';
import FrontImageVert from './FrontImageVert.jsx';

const MainWrapper = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: row;
  justify-content: flex-start;
  height: 400px;
  cursor: pointer;
`;

const FirstImageWrapper = styled.div`
  justify-self: center;
  width: 100%;
  height: 400px;
  border: 2px solid grey;
  overflow: hidden;
`;

const FirstImage = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  &:hover {
    transform: scale(1.2);
  }
  transition: 0.4s;
`;

export default function FrontImages(props) {
  const { imgs } = props;
  const { click } = props;

  if (imgs.length === 0) {
    return null;
  }

  return (
    <MainWrapper>
      <FirstImageWrapper>
        <FirstImage src={imgs[0].img_url} onClick={() => { click(0); }} />
      </FirstImageWrapper>
      <FrontImageVert imgs={imgs} click={click} startIndex={1} />
      <FrontImageVert imgs={imgs} click={click} startIndex={3} />
    </MainWrapper>
  );
}
