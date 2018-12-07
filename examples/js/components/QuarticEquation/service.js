import algebra, {Equation} from 'algebra.js';
import mathsteps from 'mathsteps';

import {ExItem, buildExpression, fractionToDecimal} from '../../../../src/js/utils';

export default (a, b, c, d, e) => {
  let items = [new ExItem(a, 'x^4'), new ExItem(b, 'x^3'), new ExItem(c, 'x^2'), new ExItem(d, 'x'), new ExItem(e, null)];
  let expression = buildExpression(items);
  // let equation = new Equation(algebra.parse(expression), 0);
  // let answers = equation.solveFor('x');
  // let steps = mathsteps.solveEquation(expression + '=0');
  // let solvingSteps = steps.map(step => {
  //   return step.substeps.length > 0 ? step.substeps.map(substep => { return substep.newEquation.ascii(); }) : [step.newEquation.ascii()];
  // });

  return {
    constraints: '\\(a \\ne 0\\)',
    eqFormula: '\\(ax^4 + bx^3 + cx^2 + dx + e = 0\\)',
    formula: '$$x_{1} = -{b \\over 4a} + {1 \\over 2} \\sqrt{({b \\over 2a})^2 - {2c \\over 3a} + {{\\sqrt[3]{2}(c^2 - 3bd + 12ae)} \\over {3a \\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}}} + {{\\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}} \\over {3 \\sqrt[3]{2} a}}} - {1 \\over 2} \\sqrt{{b^2 \\over 2a^2} - {4c \\over 3a} - {{\\sqrt[3]{2}(c^2 - 3bd + 12ae)} \\over {3a \\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}}} - {{\\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}} \\over {3 \\sqrt[3]{2} a}} - {{b^3 - 4abc + 8a^2d} \\over {4a^3 \\sqrt{({b \\over 2a})^2 - {2c \\over 3a} + {{\\sqrt[3]{2}(c^2 - 3bd + 12ae)} \\over {3a \\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}}} + {{\\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}} \\over {3 \\sqrt[3]{2} a}}}}}}$$',
    expression: expression,
    equation: '\\(' + expression + '=0\\)',
    // x1: answers.length > 0 ? fractionToDecimal(answers[0]) : null,
    // x2: answers.length > 1 ? fractionToDecimal(answers[1]) : (answers.length > 0 ? fractionToDecimal(answers[0]) : null),
    // xFormat: answers.length > 0 ? '$$x=' + algebra.toTex(answers) + '$$' : '$$No real solutions. Complex roots instead.$$',
    // steps: solvingSteps
  };
}