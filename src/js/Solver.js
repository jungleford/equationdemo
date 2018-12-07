import algebra, {Equation as Eq} from "algebra.js";

import Equation from "./Equation";
import Result from './Result';
import Type from './Type';

/**
 * @constructor Solver
 * To represent the solution to a specific Equation.
 *
 * @param equation must be an instance of Equation.
 */
function Solver(equation) {
  if (equation instanceof Equation) {
    this.equation = equation;
  } else {
    throw new TypeError('Invalid Argument:\n' +
                        'equation must be an instance of the Equation.');
  }
}

Solver.prototype.solve = () => {
  let result = new Result();
  result.equationType = Type.UNKNOWN;


  let eq = new Eq(algebra.parse(this.equation.expression));
};

export default Solver;