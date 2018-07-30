import React, { Component } from 'react';

import service from './service';

export default class SquareRoot extends Component {
  render() {
    let value = -4;
    let result = service(value);

    return (
      <div>
        <h1>Square Root</h1>
        <p>{ 'The square root of \\(' + value + '\\) is: ' + result }</p>
        <hr/>
      </div>
    );
  }
}
