import math from "mathjs";
import algebra, {Expression, Fraction} from "algebra.js";

/**
 * @constructor ExItem
 * To represent one single item in an algebra expression.
 *
 * @param factor must be a number.
 * @param unit represents the name of the variable, without factor, but can be with exponent.
 *        e.g., "x", "x^2". If the value is null, it means constant item.
 */
const ExItem = function(factor, unit) {
  if (typeof(factor) === 'number' && (typeof(unit) === 'string' && unit.trim() !== '' || unit === null)) {
    this.factor = factor;
    this.unit = unit;
  } else {
    throw new TypeError('Invalid Argument:\n' +
                        (typeof(factor) !== 'number' ? 'the factor must be a number.\n' : '') +
                        (typeof(unit) !== 'string' ? 'the unit must be a symbol.\n' : '') +
                        (unit.trim() === '' ? 'the unit should not be blank.\n' : ''));
  }
};

/**
 * Build a expression string by given an ExItem array.
 *
 * @param items must be an array, and each member must be an ExItem.
 * @returns {string}
 */
const buildExpression = (items) => {
  if (Array.isArray(items)) {
    let exItems = [];
    items.forEach((item, index) => {
      if (item instanceof ExItem) {
        if (index === 0) {
          if (item.factor === 0) {
            exItems.push('');
          } else if (item.factor === 1) {
            exItems.push(item.unit);
          } else {
            exItems.push(item.factor + item.unit);
          }
        } else {
          if (item.factor === 0) {
            exItems.push('');
          } else if (item.factor === 1) {
            exItems.push('+' + (item.unit || '1'));
          } else if (item.factor > 0) {
            exItems.push('+' + item.factor + (item.unit || ''));
          } else {
            exItems.push(item.factor + (item.unit || ''));
          }
        }
      } else {
        throw new TypeError('Invalid Argument: items[' + index + '] must be an ExItem type object.');
      }
    });

    return exItems.join('');
  } else {
    throw new TypeError('Invalid Argument: items must be an array.');
  }
};

/**
 * Convert a decimal to a fraction.
 *
 * @param decimal a string to represent decimal value.
 */
const decimalToFraction = (decimal) => {
  return algebra.parse(math.fraction(decimal).toString());
};

/**
 * Convert a fraction to a decimal.
 *
 * @param fraction a string to represent fraction value.
 * @returns {number}
 */
const fractionToDecimal = (fraction) => {
  if (typeof fraction === 'number') {
    return fraction;
  }
  else if (fraction instanceof Fraction || fraction instanceof Expression) {
    fraction = fraction.toString();
  } else if (typeof fraction !== 'string') {
    throw new TypeError('Invalid Argument: the argument must be a fraction.');
  }
  return math.number(math.fraction(fraction));
};

export default {
  /**
   * Data Types
   */
  ExItem,

  /**
   * Methods
   */
  buildExpression,
  decimalToFraction,
  fractionToDecimal
};