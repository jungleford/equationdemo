import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import service from './service';
import $ from 'jquery';

let App = createReactClass({
  render() {
    let value = service();

    return <span>{ value.toString() }</span>;
  }
});

ReactDOM.render(<App />, $('#root').get(0));
