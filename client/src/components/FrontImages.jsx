import React from 'react';
import styled from 'styled-components';
import FrontImageVert1 from './FrontImageVert1.jsx';
import FrontImageVert2 from './FrontImageVert2.jsx';

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
`;

const FirstImage = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
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
        <FirstImage src={imgs[0].image} onClick={() => { click(0); }} />
      </FirstImageWrapper>
      <FrontImageVert1 imgs={imgs} click={click} />
      <FrontImageVert2 imgs={imgs} click={click} />
    </MainWrapper>
  );
}
