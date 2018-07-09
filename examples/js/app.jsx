import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';

import {SquareRoot, LinearEquation, QuadraticEquation} from "./components";

let App = createReactClass({
  render() {
    return (
      <div>
        <SquareRoot />
        <LinearEquation />
        <QuadraticEquation />
      </div>
    );
  }
});

ReactDOM.render(<App />, $('#root').get(0));
