import React, { Component } from 'react';
import math from "mathjs";
import Plot from 'react-plotly.js';

import service from './service';

export default class QuadraticEquation extends Component {
  render() {
    let a = 1, b = -2, c = -3;
    let result = service(a, b, c);
    let expression = math.compile(result.expression);
    let xValues = math.range(-5, 5, 0.1).toArray();
    let yValues = xValues.map(function (x) {
      return expression.eval({x: x});
    });

    return (
      <div>
        <h1>Quadratic Equation</h1>
        <p>{ 'When ' + result.constraints + ', there are two solutions to ' + result.eqFormula + ' and they are ' + result.formula + ' Now \\(a=' + a + '\\), \\(b=' + b + '\\), and \\(c=' + c + '\\). The solutions to ' + result.equation + ' are ' + result.xFormat }</p>
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
                title: 'Quadratic Function: y=' + result.expression,
                annotations: [
                  {
                    x: result.x1,
                    y: 0,
                    text: 'x1=' + result.x1
                  },
                  {
                    x: result.x2,
                    y: 0,
                    text: 'x2=' + result.x2
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
