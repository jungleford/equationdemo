import math from 'mathjs';

export default (value) => {
  let expression = math.parse('sqrt(' + value + ')');
  let result = math.sqrt(value);// square root
  return '\\(' + expression.toTex() + '=' + result.toString() + '\\)';
}