import algebra, {Equation} from 'algebra.js';
import mathsteps from 'mathsteps';

import {ExItem, buildExpression, fractionToDecimal} from '../../../../src/js/utils';

export default (a, b, c) => {
  let items = [new ExItem(a, 'x^2'), new ExItem(b, 'x'), new ExItem(c, null)];
  let expression = buildExpression(items);
  let equation = new Equation(algebra.parse(expression), 0);
  let answers = equation.solveFor('x');
  let steps = mathsteps.solveEquation(expression + '=0');
  let solvingSteps = steps.map(step => {
    return step.substeps.length > 0 ? step.substeps.map(substep => { return substep.newEquation.ascii(); }) : [step.newEquation.ascii()];
  });

  return {
    constraints: '\\(a \\ne 0\\)',
    eqFormula: '\\(ax^2 + bx + c = 0\\)',
    formula: '$$x = {-b \\pm \\sqrt{b^2 - 4ac} \\over 2a}$$',
    expression: expression,
    equation: '\\(' + expression + '=0\\)',
    x1: answers.length > 0 ? fractionToDecimal(answers[0]) : null,
    x2: answers.length > 1 ? fractionToDecimal(answers[1]) : (answers.length > 0 ? fractionToDecimal(answers[0]) : null),
    xFormat: answers.length > 0 ? '$$x=' + algebra.toTex(answers) + '$$' : '$$No real solutions. Complex roots instead.$$',
    steps: solvingSteps
  };
}