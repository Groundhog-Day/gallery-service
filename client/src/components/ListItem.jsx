import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin-left: 8px;
`;
const StyledImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  cursor: pointer;
`;
const SelectedImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
`;
export default function ListItem(props) {
  if (props.currentImage === props.index) {
    return (
      <StyledLi>
        <SelectedImage src={props.img}></SelectedImage>
      </StyledLi>
    );
  }
  return (
    <StyledLi onClick={() => {props.click(props.index)}}>
      <StyledImage src={props.img}>
      </StyledImage>
    </StyledLi>
  );
}