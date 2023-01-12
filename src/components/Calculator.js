import React, { Component } from 'react';
import calculate from '../logic/calculate';

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

        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          AC
        </button>
        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          +/-
        </button>
        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          %
        </button>
        <button
          type="button"
          className="calcButton calcOrange"
          onClick={this.btnClickHandler}
        >
          ÷
        </button>

        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          7
        </button>
        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          8
        </button>
        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          9
        </button>
        <button
          type="button"
          className="calcButton calcOrange"
          onClick={this.btnClickHandler}
        >
          x
        </button>

        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          4
        </button>
        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          5
        </button>
        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          6
        </button>
        <button
          type="button"
          className="calcButton calcOrange"
          onClick={this.btnClickHandler}
        >
          -
        </button>

        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          1
        </button>
        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          2
        </button>
        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          3
        </button>
        <button
          type="button"
          className="calcButton calcOrange"
          onClick={this.btnClickHandler}
        >
          +
        </button>

        <button
          type="button"
          className="calcButton calcButtonLong calcGray"
          onClick={this.btnClickHandler}
        >
          0
        </button>
        <button
          type="button"
          className="calcButton calcGray"
          onClick={this.btnClickHandler}
        >
          .
        </button>
        <button
          type="button"
          className="calcButton calcOrange"
          onClick={this.btnClickHandler}
        >
          =
        </button>
      </section>
    );
  }
}

export default Calculator;
