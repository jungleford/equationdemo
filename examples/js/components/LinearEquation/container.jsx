import React, { Component } from 'react';
import math from 'mathjs';
import Plot from 'react-plotly.js';

import service from './service';

export default class LinearEquation extends Component {
  render() {
    let a = 3, b = -2;
    let result = service(a, b);
    let expression = math.compile(result.expression);
    let xValues = math.range(-2, 2, 0.1).toArray();
    let yValues = xValues.map(function (x) {
      return expression.eval({x: x});
    });

    return (
      <div>
        <h1>Linear Equation</h1>
        <p>{ 'When \\(a \\ne 0\\), the solution to \\(ax+b=0\\) is $$' + result.formula + '$$ Now \\(a=' + a + '\\), \\(b=' + b + '\\). The solution to \\(' + result.equation + '\\) are $$x=' + result.x + '$$' }</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Plot
            data={[
              {
                x: xValues,
                y: yValues,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'red'},
              }
            ]}
            layout={ {width: 320, height: 240, title: 'Linear Function: y=' + result.expression} }
            config={ {displayModeBar: false} }
          />
        </div>
        <hr/>
      </div>
    );
  }
}
