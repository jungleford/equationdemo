import React, { Component } from 'react';
import service from './service';

export default class LinearEquation extends Component {
  render() {
    let a = 3, b = -2;
    let result = service(a, b);

    return (
      <p>{ 'When \\(a \\ne 0\\), the solution to \\(ax+b=0\\) is $$' + result.formula + '$$ Now \\(a=' + a + '\\), \\(b=' + b + '\\). The solution to \\(' + result.equation + '\\) are $$x=' + result.x + '$$' }</p>
    );
  }
}
