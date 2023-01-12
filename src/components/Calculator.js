import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      calculatorData: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  updateDisplay = (newCalculatorData) => {
    const { next, operation, total } = newCalculatorData;
    if (next === null && operation === null && total === null) {
      this.setState({ displayValue: 0 });
      return;
    }
    if (next === null) {
      this.setState({ displayValue: total });
      return;
    }
    this.setState({ displayValue: next });
  }

  btnClickHandler = (e) => {
    const button = e.target.textContent;
    const { calculatorData } = this.state;
    const newCalculatorData = calculate(calculatorData, button);
    this.updateDisplay(newCalculatorData);
    this.setState({
      calculatorData: newCalculatorData,
    });
  }

  render() {
    const { displayValue } = this.state;

    return (
      <section className="calcContainer">

        <input
          type="text"
          className="calcDisplay"
          value={displayValue}
          onChange={this.onChangeHandler}
          disabled
        />

        <Button text="AC" clickHandler={this.btnClickHandler} />
        <Button text="+/-" clickHandler={this.btnClickHandler} />
        <Button text="%" clickHandler={this.btnClickHandler} />
        <Button text="÷" clickHandler={this.btnClickHandler} color="Orange" />

        <Button text="7" clickHandler={this.btnClickHandler} />
        <Button text="8" clickHandler={this.btnClickHandler} />
        <Button text="9" clickHandler={this.btnClickHandler} />
        <Button text="x" clickHandler={this.btnClickHandler} color="Orange" />

        <Button text="4" clickHandler={this.btnClickHandler} />
        <Button text="5" clickHandler={this.btnClickHandler} />
        <Button text="6" clickHandler={this.btnClickHandler} />
        <Button text="-" clickHandler={this.btnClickHandler} color="Orange" />

        <Button text="1" clickHandler={this.btnClickHandler} />
        <Button text="2" clickHandler={this.btnClickHandler} />
        <Button text="3" clickHandler={this.btnClickHandler} />
        <Button text="+" clickHandler={this.btnClickHandler} color="Orange" />

        <Button text="0" clickHandler={this.btnClickHandler} columns="2" />
        <Button text="." clickHandler={this.btnClickHandler} />
        <Button text="=" clickHandler={this.btnClickHandler} color="Orange" />

      </section>
    );
  }
}

export default Calculator;
