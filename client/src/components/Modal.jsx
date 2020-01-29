import React from 'react';
export default function Modal(props) {
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
  };

  const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30
  };

  if(!props.show){
    return null;
  }
  return (
  <div className="backdrop" style={backdropStyle}>  
    <div className="modal" style={modalStyle}>
      <h1>Hello Modal</h1>
      <button onClick={props.showModal}>Close Modal</button>
    </div>
  </div>);
};