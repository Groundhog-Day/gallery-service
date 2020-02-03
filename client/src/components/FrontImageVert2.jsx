import React from 'react';
import styled from 'styled-components';

const MainImageWrapper = styled.div`
  width: 50%;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid grey;
`;

const SizedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// only render a column if both images for the column exist
export default function FrontImageVert2(props) {
  if (!props.imgs[3] || !props.imgs[4]) {
    return null;
  }

  return (
    <MainImageWrapper>
      <InnerWrapper>
        <SizedImage src={props.imgs[3].image} onClick={() => { props.click(3); }} />
      </InnerWrapper>
      <InnerWrapper>
        <SizedImage src={props.imgs[4].image} onClick={() => { props.click(4); }} />
      </InnerWrapper>
    </MainImageWrapper>
  );
}