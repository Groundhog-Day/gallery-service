import React from 'react';
import styled from 'styled-components';

const MainImageWrapper = styled.div`
  width: 50%;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid grey;
  overflow: hidden;
`;

const SizedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  &:hover {
    transform: scale(1.2);
  }
  transition: 0.4s;
`;

// only render a column if both images for the column exist
export default function FrontImageVert(props) {
  if (!props.imgs[props.startIndex] || !props.imgs[props.startIndex + 1]) {
    return null;
  }

  return (
    <MainImageWrapper>
      <InnerWrapper>
        <SizedImage src={props.imgs[props.startIndex].image} onClick={() => { props.click(props.startIndex); }} />
      </InnerWrapper>
      <InnerWrapper>
        <SizedImage src={props.imgs[props.startIndex + 1].image} onClick={() => { props.click(props.startIndex + 1); }} />
      </InnerWrapper>
    </MainImageWrapper>
  );
}
