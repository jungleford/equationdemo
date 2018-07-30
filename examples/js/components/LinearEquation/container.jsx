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
        <p>{ 'When ' + result.constraints + ', the solution to ' + result.eqFormula + ' is ' + result.formula + ' Now \\(a=' + a + '\\), \\(b=' + b + '\\). The solution to ' + result.equation + ' are ' + result.xFormat }</p>
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
            layout={
              {
                yaxis: {scaleanchor: 'x'},
                width: 320,
                height: 480,
                title: 'Linear Function: y=' + result.expression,
                annotations: [
                  {
                    x: result.x,
                    y: 0,
                    text: 'x=' + result.x
                  }
                ]
              }
            }
            config={ {displayModeBar: false} }
          />
        </div>
        <hr/>
      </div>
    );
  }
}
