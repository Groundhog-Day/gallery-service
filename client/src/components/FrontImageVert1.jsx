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
export default function FrontImageVert1(props) {
  if (!props.imgs[1] || !props.imgs[2]) {
    return null;
  }

  return (
    <MainImageWrapper>
      <InnerWrapper>
        <SizedImage src={props.imgs[1].image} onClick={() => { props.click(1); }} />
      </InnerWrapper>
      <InnerWrapper>
        <SizedImage src={props.imgs[2].image} onClick={() => { props.click(2); }} />
      </InnerWrapper>
    </MainImageWrapper>
  );
}
