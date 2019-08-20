/* jshint esversion:6 */
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Kate';
    const showHello = true;
    const showMath = true;
    const num1 = 40;
    const num2 = 23;


    let math;
    if (showMath) {
      // eslint-disable-next-line jsx-a11y/heading-has-content
      math = (<h4>
          {num1} + {num2} = {num1 + num2}
      </h4>);
    } else {
      math = null;
    }
    return (
      <div className="App">
        <h1>The App Component</h1>
        {showHello ?
          <h4>Hello {name.toUpperCase()}</h4> : null}
        {math}
      </div>
    );
  }
}
export default App;
