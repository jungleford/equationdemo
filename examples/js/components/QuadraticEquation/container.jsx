import React, { Component } from 'react';
import math from "mathjs";
import Plot from 'react-plotly.js';

import service from './service';

export default class QuadraticEquation extends Component {
  render() {
    let a = 1, b = -2, c = -3;
    let result = service(a, b, c);
    let expression = math.compile(result.expression);
    let xValues = math.range(-10, 10, 0.1).toArray();
    let yValues = xValues.map(function (x) {
      return expression.eval({x: x});
    });

    return (
      <div>
        <h1>Quadratic Equation</h1>
        <p>{ 'When \\(a \\ne 0\\), there are two solutions to \\(ax^2+bx+c=0\\) and they are $$' + result.formula + '$$ Now \\(a=' + a + '\\), \\(b=' + b + '\\), and \\(c=' + c + '\\). The solutions to \\(' + result.equation + '\\) are $$x=' + result.x + '$$' }</p>
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
            layout={ {width: 320, height: 480, title: 'Quadratic Function: y=' + result.expression} }
            config={ {displayModeBar: false} }
          />
        </div>
        <hr/>
      </div>
    );
  }
}
