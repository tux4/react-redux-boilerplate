import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  getPropTypes() {
    return {
      increment: PropTypes.func.isRequired,
      decrement: PropTypes.func.isRequired,
      counter: PropTypes.number.isRequired
    }
  };

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
      </p>
    );
  }
}
