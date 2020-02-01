import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
`;

const ModalBody = styled.div`
  background-color: #fff;
  borderRadius: 5;
  min-height: 1000;
  margin: 0 auto;
`;


export default function Modal(props) {

  if(!props.show){
    return null;
  }
  return (
  <ModalBackdrop>
    <ModalBody>
      <h1>Hello Modal</h1>
      <img src={props.imgs[0].image} style={{borderRadius: '15px'}}></img>
      <button onClick={props.showModal}>Close Modal</button>
    </ModalBody>
  </ModalBackdrop>);
};