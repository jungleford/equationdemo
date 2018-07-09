import React, { Component } from 'react';
import service from './service';

export default class QuadraticEquation extends Component {
  render() {
    let a = 1, b = -2, c = -3;
    let result = service(a, b, c);

    return (
      <p>{ 'When \\(a \\ne 0\\), there are two solutions to \\(ax^2+bx+c=0\\) and they are $$' + result.formula + '$$ Now \\(a=' + a + '\\), \\(b=' + b + '\\), and \\(c=' + c + '\\). The solutions to \\(' + result.equation + '\\) are $$x=' + result.x + '$$' }</p>
    );
  }
}
