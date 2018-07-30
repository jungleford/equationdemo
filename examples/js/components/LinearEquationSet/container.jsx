import React, { Component } from 'react';
import algebra from 'algebra.js';
import Plot from 'react-plotly.js';

import {decimalToFraction, fractionToDecimal} from '../../../../src/js/utils';
import service from './service';

export default class LinearEquationSet extends Component {
  render() {
    let a1 = 1, b1 = 2, c1 = -3;
    let a2 = 2, b2 = -1, c2 = -1;
    let result = service(a1, b1, c1, a2, b2, c2);
    let xValues = _.range(-5, 5, 0.1);

    let equation1 = result.expression1 + '=0';
    let expression1 = algebra.parse(equation1).solveFor('y');
    let yValues1 = xValues.map(function (x) {
      let y = expression1.eval({x: decimalToFraction(x)});
      return fractionToDecimal(y);
    });

    let equation2 = result.expression2 + '=0';
    let expression2 = algebra.parse(equation2).solveFor('y');
    let yValues2 = xValues.map(function (x) {
      let y = expression2.eval({x: decimalToFraction(x)});
      return fractionToDecimal(y);
    });

    return (
      <div>
        <h1>Linear Equation Set</h1>
        <p>{ 'When ' + result.constraints + ', the solutions to ' + result.eqFormula + ' are ' + result.formula + 'The solutions to ' + result.equation + ' are ' + result.xyFormat }</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Plot
            data={[
              {
                name: equation1,
                x: xValues,
                y: yValues1,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'red'},
              },
              {
                name: equation2,
                x: xValues,
                y: yValues2,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: 'blue'},
              }
            ]}
            layout={
              {
                yaxis: {scaleanchor: 'x'},
                width: 400,
                height: 400,
                title: 'Linear Function Set: ' + equation1 + ', ' + equation2,
                annotations: [
                  {
                    x: result.x,
                    y: result.y,
                    text: 'x=' + result.x + ', y=' + result.y
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
