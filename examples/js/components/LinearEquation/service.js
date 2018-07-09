import algebra, {Equation} from 'algebra.js';

export default (a, b) => {
  let expression = (a === 1 ? '' : a) + 'x' + (b > 0 ? '+' + b : (b < 0 ? b : ''));
  let equation = new Equation(algebra.parse(expression), algebra.parse('0'));

  return {
    equation: expression + '=0',
    formula: 'x = -{b \\over a}',
    x: equation.solveFor('x').toTex()
  };
}