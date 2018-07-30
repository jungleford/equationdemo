import algebra, {Equation} from 'algebra.js';

import {ExItem, buildExpression, fractionToDecimal} from '../../../../src/js/utils';

export default (a, b) => {
  let items = [new ExItem(a, 'x'), new ExItem(b, null)];
  let expression = buildExpression(items);
  let equation = new Equation(algebra.parse(expression), 0);
  let answer = equation.solveFor('x');

  return {
    constraints: '\\(a \\ne 0\\)',
    eqFormula: '\\(ax + b = 0\\)',
    formula: '$$x = -{b \\over a}$$',
    expression: expression,
    equation: '\\(' + expression + '=0\\)',
    x: fractionToDecimal(answer),
    xFormat: '$$x=' + algebra.toTex(answer) + '$$'
  };
}