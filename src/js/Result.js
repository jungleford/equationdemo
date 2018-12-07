/**
 * Data structure of the result of a equation or equation set.
 *
 * equationType:  Must be one of the value defined by {Type}.
 *                The default value is UNKNOWN.
 *
 * root:          The solution(s) of the equation or equation set.
 *
 * plot:          A plot graph to represent the dynamic function on an X-Y coordinate system.
 *
 * steps:         (Optional) The steps to show how to solve the equation or equation set.
 */
export default {
  equationType,
  roots,
  plot,
  steps
}