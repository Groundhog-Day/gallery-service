import React from 'react';
import Modal from './Modal.jsx';
 export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    };

  }

  showModal() {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
    <div>
      <h1>React Rendering</h1>
      <button  onClick={this.showModal.bind(this)}> show Modal </button>
      <Modal show={this.state.show}> Modal text </Modal>
    </div>);
  };
}
