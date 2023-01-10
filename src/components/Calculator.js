import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0,
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      displayValue: e.target.value,
    });
  };

  render() {
    const { displayValue } = this.state;

    return (
      <section className="calcContainer">
        <input
          type="text"
          className="calcDisplay"
          value={displayValue}
          onChange={this.onChangeHandler}
        />

        <div className="calcButton calcGray">AC</div>
        <div className="calcButton calcGray">+/-</div>
        <div className="calcButton calcGray">%</div>
        <div className="calcButton calcOrange">÷</div>

        <div className="calcButton calcGray">7</div>
        <div className="calcButton calcGray">8</div>
        <div className="calcButton calcGray">9</div>
        <div className="calcButton calcOrange">×</div>

        <div className="calcButton calcGray">4</div>
        <div className="calcButton calcGray">5</div>
        <div className="calcButton calcGray">6</div>
        <div className="calcButton calcOrange">-</div>

        <div className="calcButton calcGray">1</div>
        <div className="calcButton calcGray">2</div>
        <div className="calcButton calcGray">3</div>
        <div className="calcButton calcOrange">+</div>

        <div className="calcButton calcButtonLong calcGray">0</div>
        <div className="calcButton calcGray">.</div>
        <div className="calcButton calcOrange">=</div>
      </section>
    );
  }
}

export default Calculator;
