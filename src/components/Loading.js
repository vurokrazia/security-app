import React, { Component } from 'react';

export default class Loading extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return <p>Cargando...</p>;
  }
}
