import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.jsx';

const MainWrapper = styled.div`
  width: auto !important;
  margin-left: 0px !important;
  margin-right: 0px !important;
  margin-bottom: 32px !important;
  display: block;
`;

const FirstInnerWrapper = styled.div`
  
  max-width: 105vh !important;
  margin-left: auto !important;
  margin-right: auto !important;
  overflow: hidden !important;
`;

const SecondInnerWrapper = styled.div`
  margin-left: auto !important;
  margin-right: auto !important;
  position: relative !important;
  transform: translateY(0px) !important;
`;

const FirstGradientDiv = styled.div`
  position: absolute !important;
  height: 64px !important;
  transform: rotate(180deg) !important;
  z-index: 1 !important;
  width: 20px !important;
  background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 90.82%) !important;
`;

const SecondGradientDiv = styled.div`
  position: absolute !important;
  right: 0px !important;
  height: 64px !important;
  z-index: 1 !important;
  width: 20px !important;
  background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 90.82%) !important;
`;

const Layer1 = styled.div`
  position: relative !important;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  height: 64px !important;
  overflow: hidden !important;
`;

// main list will have transform: translateX(-56px) per image past 3
const MainList = styled.ul`
  transition: 0.4s;
  transform: translateX(${props => -56 * (props.currentImage > 1 ? (props.currentImage < props.imgs.length - 2 ? props.currentImage - 1 : props.imgs.length - 3) : 0)}px);
  display: flex;
  flex-direction: row;
  position: absolute !important;
  list-style-type: none !important;
  left: 0px !important;  
  margin: 0px !important;
  padding: 0px 0px 0px 8px !important;
`;

export default function ImageList(props) {


  // test li <li style={{'marginLeft': '8px'}}><img src='https://picsum.photos/48'></img></li>
  return(
  <MainWrapper>
    <FirstInnerWrapper>
      <SecondInnerWrapper>
        <FirstGradientDiv />
        <SecondGradientDiv />
        <Layer1>
          <div style={{position: 'absolute'}}>
            <MainList currentImage={props.currentImage} imgs={props.imgs}>
              {props.imgs.map((a, i) => {
                return <ListItem img={a.image} index={i} currentImage={props.currentImage} click={props.click} key={i}/>}
              )}
            </MainList>
          </div>
        </Layer1>
      </SecondInnerWrapper>
    </FirstInnerWrapper>
  </MainWrapper>
  );
}
