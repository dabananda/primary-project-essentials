import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Checkout extends Component {

  goBackHandler = () => {
    // use navigate instead of history.goBack()
    // use navigate() to goback the previous page
    this.props.navigate("/");
  };

  render() {
    return (
    //  Your code
    );
  }
}

function navigator(props) {
  const navigate = useNavigate();
  return <Checkout {...props} navigate={navigate} />;
}

export default navigator;
