import React from 'react';
import styled from 'styled-components';
////////////////////////////
// styles for each component
const ModalBackdrop = styled.div`
  display: flex;
  flex: 1;
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
align-self: center;
justify-self: center;
`
const MainImage = styled.img`
  border-radius: 15px;
  align-items: center;
  justify-self: center;
`

const CloseButton = styled.button`
  align-self: flex-start;
  justify-self: flex-end;
`
///////////////////////
// main Modal component
export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if(!this.props.show){
      return null;
    }
    return (
    <ModalBackdrop>
      <ModalBody>
        <ImageWrapper>
          <MainImage src={this.props.imgs[0].image} />
        </ImageWrapper>
        <CloseButton onClick={this.props.showModal}>Close</CloseButton>
      </ModalBody>
    </ModalBackdrop>);
  }
};