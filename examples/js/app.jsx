import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';

import {SquareRoot} from "./components";

let App = createReactClass({
  render() {
    return <SquareRoot />;
  }
});

ReactDOM.render(<App />, $('#root').get(0));
