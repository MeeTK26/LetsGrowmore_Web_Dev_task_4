// Calculator.js

import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
  }

  handleClick = (value) => {
    this.setState({
      display: this.state.display + value,
    });
  };

  handleClear = () => {
    this.setState({
      display: '',
    });
  };

  handleCalculate = () => {
    try {
      const result = eval(this.state.display);
      this.setState({
        display: result,
      });
    } catch (error) {
      this.setState({
        display: 'Error',
      });
    }
  };

  render() {
    return (

        
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button className="btn" onClick={() => this.handleClick('7')}>
            7
          </button>
          <button className="btn" onClick={() => this.handleClick('8')}>
            8
          </button>
          <button className="btn" onClick={() => this.handleClick('9')}>
            9
          </button>
          <button className="btn" onClick={() => this.handleClick('/')}>
            /
          </button>
          <button className="btn" onClick={() => this.handleClick('4')}>
            4
          </button>
          <button className="btn" onClick={() => this.handleClick('5')}>
            5
          </button>
          <button className="btn" onClick={() => this.handleClick('6')}>
            6
          </button>
          <button className="btn" onClick={() => this.handleClick('*')}>
            *
          </button>
          <button className="btn" onClick={() => this.handleClick('1')}>
            1
          </button>
          <button className="btn" onClick={() => this.handleClick('2')}>
            2
          </button>
          <button className="btn" onClick={() => this.handleClick('3')}>
            3
          </button>
          <button className="btn" onClick={() => this.handleClick('-')}>
            -
          </button>
          <button className="btn" onClick={() => this.handleClick('0')}>
            0
          </button>
          <button className="btn" onClick={() => this.handleClick('.')}>
            .
          </button>
          <button className="btn" onClick={() => this.handleClick('+')}>
            +
          </button>
          <button className="btn" onClick={this.handleClear}>
            C
          </button>
          <button className="btn" onClick={this.handleCalculate}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
