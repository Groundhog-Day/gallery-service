import React from 'react';
import styled from 'styled-components';
// key codes
// esc key 27
// left arrow 37
// right arrow 39

////////////////////////////
// styles for each component
const ModalBackdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
display: flex;
flex-direction: row;
align-self: center;
justify-self: center;
`
const MainImage = styled.img`
  border-radius: 15px;
  align-items: center;
  justify-self: center;
`;

const CloseButton = styled.button`
  color: #505050;
  align-self: flex-start;
  justify-self: flex-end;
  border: none;
  font-size: 70px;
  font-weight: lighter;
`;

const Arrow = styled.button`
  color: #505050;
  align-self: center;
  border: none;
  font-size: 70px;
  font-weight: lighter;
  padding: 30px;
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
      currentImage: 0
    }
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  // d is boolean (direction). true represents right. false represents left.
  handleArrowClick(d) {
    if (d) {
      if (this.state.currentImage < this.props.imgs.length - 1) {
        this.setState({currentImage: this.state.currentImage + 1});
      } else {
        this.setState({currentImage: 0});
      }
    } else {
      if (this.state.currentImage === 0) {
        this.setState({currentImage: this.props.imgs.length - 1});
      } else {
        this.setState({currentImage: this.state.currentImage - 1});
      }
    }
  }

  render() {
    if(!this.props.show){
      return null;
    }
    return (
    <ModalBackdrop>
      <ModalBody>
        <Arrow onClick={() => {this.handleArrowClick(false)}}>&#x2039;</Arrow>
        <ImageWrapper>
          <MainImage src={this.props.imgs[this.state.currentImage].image} />
        </ImageWrapper>
        <Arrow onClick={() => {this.handleArrowClick(true)}}>&#x203A;</Arrow>
        <ImageCounter>{this.state.currentImage + 1}/{this.props.imgs.length}
          <Description><br></br>The World Famous Seashell House ~ Casa Caracol</Description>
        </ImageCounter>
        <CloseButton onClick={this.props.showModal} id='close' onkeydown={(e) => {console.log(e)}}>&times;</CloseButton>
      </ModalBody>
    </ModalBackdrop>);
  }
};