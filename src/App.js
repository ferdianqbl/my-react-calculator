import React, { Component } from 'react';
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    }
  }

  handleClear = () => {
    this.setState({ number: "" });
  }

  handleClick = (e) => {
    this.setState({ number: this.state.number.concat(e.target.name) });
  }

  handleBackspace = () => {
    this.setState({ number: this.state.number.slice(0, -1) })
  }

  handleCalc = () => {
    try {
      this.setState({ number: Number(eval(this.state.number).toString()).toFixed(2) });

    } catch (error) {
      this.setState({ number: 'Invalid Format' });
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">React Calculator</h1>
        <div className="calculator">
          <input type="text" className="calc-numbers" value={this.state.number} />
          <div className="calculator-buttons">
            <button className="btn clear span-2" onClick={this.handleClear}>
              C
            </button>
            <button className="btn orange" onClick={this.handleBackspace}>
              &larr;
            </button>
            <button onClick={this.handleClick} name="/" className="btn orange">
              &divide;
            </button>
            <button onClick={this.handleClick} name="7" className="btn">
              7
            </button>
            <button onClick={this.handleClick} name="8" className="btn">
              8
            </button>
            <button onClick={this.handleClick} name="9" className="btn">
              9
            </button>
            <button onClick={this.handleClick} name="*" className="btn orange">
              x
            </button>
            <button onClick={this.handleClick} name="4" className="btn">
              4
            </button>
            <button onClick={this.handleClick} name="5" className="btn">
              5
            </button>
            <button onClick={this.handleClick} name="6" className="btn">
              6
            </button>
            <button onClick={this.handleClick} name="-" className="btn orange">
              -
            </button>
            <button onClick={this.handleClick} name="1" className="btn">
              1
            </button>
            <button onClick={this.handleClick} name="2" className="btn">
              2
            </button>
            <button onClick={this.handleClick} name="3" className="btn">
              3
            </button>
            <button onClick={this.handleClick} name="+" className="btn orange">
              +
            </button>
            <button onClick={this.handleClick} name="0" className="btn span-3">
              0
            </button>
            <button onClick={this.handleCalc} className="btn orange equal">
              =
            </button>
          </div>
        </div>
      </div>
    )
  }
}