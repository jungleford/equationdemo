import {Expression as Expr} from 'algebra.js';

const vRange = /^[a-zA-Z]$/;
const eRegEx = /^ *-? *([0-9]+|(([0-9]+ *\*?)? *[a-zA-Z] *(\^ *[0-3])?)) *([+\-] *([0-9]+|(([0-9]+ *\*?)? *[a-zA-Z] *(\^ *[0-3])?)) *)*= *-? *([0-9]+|(([0-9]+ *\*?)? *[a-zA-Z] *(\^ *[0-3])?)) *([+\-] *([0-9]+|(([0-9]+ *\*?)? *[a-zA-Z] *(\^ *[0-3])?)) *)*$/;

function isVaraiable(variable) {
  return typeof variable === 'string' && variable.length === 1 && vRange.test(variable);
}

/**
 * @constructor Equation
 * To represent one single algebra equation.
 * You can use an array of Equations to represent equation set.
 *
 * Stucture:
 *
 *     variables:   the variables defined by argument.
 *     expression:  the expression defined by argument.
 *     dimension:   the dimension of this equation, i.e. the highest dimension among the variables.
 *
 * @param variables a character that represents the unknown element or an array contains all the unknown elements that to be solved.
 *                  Usually to be 'x', 'y', 'z', etc.
 *                  Currently only one single latin character is supported for one variable.
 * @param expression a string that represents an equation.
 *                   The variables in this equation should only be in the "variables" parameter.
 */
function Equation(variables, expression) {
  if (typeof expression !== 'string') {
    throw new TypeError('Invalid Argument:\n' +
                        'the equation must be a string.');
  } else if (isVaraiable(variables)) {
    if (eRegEx.test(expression)) {
      this.variables = [variables];
      this.expression = expression;
    } else {
      throw new TypeError('Invalid Argument:\n' +
                          'the equation format is not valid.');
    }
  } else if (_.isArray(variables)) {
    variables.forEach(variable => {
      if (!isVaraiable(variable)) {
        throw new TypeError('Invalid Argument:\n' +
                            'variables must be a single latin character or an array of single latin characters.');
      } else if (expression.indexOf(variable) === -1) {
        throw new TypeError('Invalid Argument:\n' +
                            'the equation must have the variable \'' + variable +'\'.');
      }
    });
    this.variables = variables;
    this.expression = expression;
  } else {
    throw new TypeError('Invalid Argument:\n' +
                        'variables must be a single latin character or an array of single latin characters.');
  }

  let exprs = expression.split('=');
  let pows = exprs.map(expr => {
    let simp = new Expr(expr.trim()).simplify().toString();
    let oneSidePows = /[a-zA-Z] *\^ *[0-3]/g.match(simp).map(item => {
      return _.parseInt(/[0-3]/.match(item)[0]);
    });
    return _.max(oneSidePows);
  });
  this.dimension = _.max(pows);
}

export default Equation;