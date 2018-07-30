import algebra, {Equation} from 'algebra.js';

import {ExItem, buildExpression, fractionToDecimal} from '../../../../src/js/utils';

export default (a, b, c) => {
  let items = [new ExItem(a, 'x^2'), new ExItem(b, 'x'), new ExItem(c, null)];
  let expression = buildExpression(items);
  let equation = new Equation(algebra.parse(expression), 0);
  let answers = equation.solveFor('x');

  return {
    constraints: '\\(a \\ne 0\\)',
    eqFormula: '\\(ax^2 + bx + c = 0\\)',
    formula: '$$x = {-b \\pm \\sqrt{b^2 - 4ac} \\over 2a}$$',
    expression: expression,
    equation: '\\(' + expression + '=0\\)',
    x1: fractionToDecimal(answers[0]),
    x2: fractionToDecimal(answers[1]),
    xFormat: '$$x=' + algebra.toTex(answers) + '$$'
  };
}