import React, { Component } from 'react';
import service from './service';

export default class SquareRoot extends Component {
  render() {
    let value = -4;
    let result = service(value);

    return (
      <p>{ 'The square root of ' + value + ' is: ' + result }</p>
    );
  }
}
