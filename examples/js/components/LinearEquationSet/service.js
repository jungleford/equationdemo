import algebra, {Equation} from 'algebra.js';

import {ExItem, buildExpression, fractionToDecimal} from "../../../../src/js/utils";

export default (a1, b1, c1, a2, b2, c2) => {
  let items1 = [new ExItem(a1, 'x'), new ExItem(b1, 'y'), new ExItem(c1, null)];
  let expression1 = buildExpression(items1);
  let equation1 = new Equation(algebra.parse(expression1), 0);
  let items2 = [new ExItem(a2, 'x'), new ExItem(b2, 'y'), new ExItem(c2, null)];
  let expression2 = buildExpression(items2);
  let equation2 = new Equation(algebra.parse(expression2), 0);

  let answer1 = equation1.solveFor('y');
  let answer2 = equation2.solveFor('y');
  let equationX = new Equation(answer1, answer2);
  let answerX = equationX.solveFor('x');
  let equationY = equation1.eval({x: answerX});
  let answerY = equationY.solveFor('y');

  return {
    constraints: '\\(a_{1} \\cdot b_{2} \\ne a_{2} \\cdot b_{1}\\)',
    eqFormula: '\\(\\begin{cases} a_{1}\\cdot x + b_{1}\\cdot y + c_{1} = 0 \\\\ a_{2}\\cdot x + b_{2}\\cdot y + c_{2} = 0 \\end{cases}\\)',
    formula: '$$\\begin{cases} x = {{b_{1}c_{2} - b_{2}c_{1}} \\over {a_{1}b_{2} - a_{2}b_{1}}} \\\\ y = {{a_{2}c_{1} - a_{1}c_{2}} \\over {a_{1}b_{2} - a_{2}b_{1}}} \\end{cases}$$',
    expression1: expression1,
    expression2: expression2,
    equation: '\\(\\begin{cases}' + equation1.toString() + ' \\\\ ' + equation2.toString() + '\\end{cases}\\)',
    x: fractionToDecimal(answerX),
    y: fractionToDecimal(answerY),
    xyFormat: '$$\\begin{cases} x=' + algebra.toTex(answerX) + ' \\\\ y=' + algebra.toTex(answerY) + '\\end{cases}$$'
  };
}