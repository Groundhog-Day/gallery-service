import React from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';
import FrontImages from './FrontImages.jsx';


 export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      data: [],
      
    };
    // request images for a random accomodationId
    axios({
      method: 'GET',
      url: `/api/${Math.ceil(Math.random() * 100)}`,
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
      <h1>air-carousel</h1>
      <FrontImages imgs={this.state.data}/>
      <button style={{'float': 'right'}} onClick={this.showModal.bind(this)}> View Images </button>
      <Modal show={this.state.show} showModal={this.showModal.bind(this)} imgs={this.state.data}></Modal>
    </div>);
  };
}
