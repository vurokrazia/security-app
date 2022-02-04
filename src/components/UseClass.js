import React, { Component } from 'react';
import Loading from './Loading';

export default class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      loading: false,
    };
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {this.state.error && <p>El codigo es incorrecto</p>}
        {this.state.loading && <Loading />}
        <input type='text' placeholder='código de seguridad' />
        <button
          onClick={() => {
            this.setState((prevState) => ({ loading: !prevState.loading }));
          }}
        >
          Comprobar
        </button>
      </div>
    );
  }
}
