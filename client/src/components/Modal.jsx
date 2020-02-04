import React from 'react';
import styled from 'styled-components';
import ImageList from './ImageList.jsx';


////////////////////////////
// styles for each component
const ModalBackdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-self: center;
  width: 55%;
`
const MainImage = styled.img`
  border-radius: 15px;
  align-items: center;
  justify-self: center;
  width: 100%
`;

const CloseButton = styled.button`
  background-color: #fff;
  color: #505050;
  align-self: flex-start;
  justify-self: flex-end;
  border: none;
  font-size: 70px;
  font-weight: lighter;
  cursor: pointer;
`;

const Arrow = styled.button`
  color: #505050;
  background-color: #fff;
  align-self: center;
  border: none;
  font-size: 70px;
  font-weight: lighter;
  padding: 20px;
  cursor: pointer;
`;

const ImageCounter = styled.div`
  color: #606060;
  font-family: Helvetica;
  align-self: center;
`;
const Description = styled.div`
  color: #606060;
  font-family: Helvetica;
  font-weight: lighter;
`;

///////////////////////
// main Modal component
export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
 
  // key codes
  // esc key 27
  // left arrow 37
  // right arrow 39
  handleKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == '39') {
      this.props.handleArrowClick(true);
    }
    else if (e.keyCode == '37') {
      this.props.handleArrowClick(false);
    }
    else if (e.keyCode == '27') {
      this.props.showModal();
    }
  }

  render() {
    if(!this.props.show){
      return null;
    }
    document.onkeydown = this.handleKeyPress.bind(this);
    return (
    <ModalBackdrop>
      <ModalBody>
        <Arrow onClick={() => {this.props.handleArrowClick(false)}} >&#x2039;</Arrow>
        <ImageWrapper>
          <MainImage src={this.props.imgs[this.props.currentImage].image} />
        </ImageWrapper>
        <Arrow onClick={() => {this.props.handleArrowClick(true)}}>&#x203A;</Arrow>
        <ImageCounter>
          <ImageList currentImage={this.props.currentImage} imgs={this.props.imgs} click={this.props.handleThumbClick}></ImageList>
          {this.props.currentImage + 1}/{this.props.imgs.length}
          <Description><br></br>{this.props.name}</Description>
        </ImageCounter>
      </ModalBody>
      <CloseButton onClick={this.props.showModal} id='close'>&times;</CloseButton>
    </ModalBackdrop>);
  }
};