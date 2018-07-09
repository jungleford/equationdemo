import algebra, {Equation} from 'algebra.js';

export default (a, b, c) => {
  let expression = (a === 1 ? '' : a) + 'x^2' + (b > 0 ? '+' + b + 'x': (b < 0 ? b + 'x': '')) + (c > 0 ? '+' + c: (c < 0 ? c : ''));
  let equation = new Equation(algebra.parse(expression), algebra.parse('0'));

  return {
    equation: expression + '=0',
    formula: 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}',
    x: equation.solveFor('x').toString()
  };
}