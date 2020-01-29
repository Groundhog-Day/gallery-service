import React from 'react';
import Modal from './Modal.jsx';
import axios from 'axios';
 export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      data: []
    };
    axios({
      method: 'GET',
      url: 'http://localhost:1337/api/1',
    })
    .then((res) => {
      console.log(res.data);
      this.setState({data: res.data});
      console.log(this.state.data[0].image);
    })
    .catch((err) => {console.log(err)});
  }

  showModal() {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
    <div>
      <h1>React Rendering</h1>
      <button  onClick={this.showModal.bind(this)}> show Modal </button>
      <Modal show={this.state.show} showModal={this.showModal.bind(this)} imgs={this.state.data}></Modal>
    </div>);
  };
}
