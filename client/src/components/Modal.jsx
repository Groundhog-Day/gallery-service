import React from 'react';
export default function Modal(props) {
  if(!props.show){
    return null;
  }
  return <div><h1>Hello Modal</h1></div>;
};