import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import styles from './Calc.module.css';

export default function Calc() {
  const [displayValue, setDisplayValue] = useState(['0']);
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateDisplay = (newCalculatorData) => {
    const { next, operation, total } = newCalculatorData;
    if (next === null && operation === null && total === null) {
      setDisplayValue('0');
      return;
    }
    if (next === null) {
      setDisplayValue(total);
      return;
    }
    setDisplayValue(next);
  };

  const btnClickHandler = (e) => {
    const button = e.target.textContent;
    const newCalculatorData = calculate(calculatorData, button);
    updateDisplay(newCalculatorData);
    setCalculatorData(newCalculatorData);
  };

  return (
    <section className={styles.calcContainer}>
      <input
        type="text"
        className={styles.calcDisplay}
        value={displayValue}
        disabled
      />

      <Button text="AC" clickHandler={btnClickHandler} />
      <Button text="+/-" clickHandler={btnClickHandler} />
      <Button text="%" clickHandler={btnClickHandler} />
      <Button text="÷" clickHandler={btnClickHandler} color="Orange" />

      <Button text="7" clickHandler={btnClickHandler} />
      <Button text="8" clickHandler={btnClickHandler} />
      <Button text="9" clickHandler={btnClickHandler} />
      <Button text="x" clickHandler={btnClickHandler} color="Orange" />

      <Button text="4" clickHandler={btnClickHandler} />
      <Button text="5" clickHandler={btnClickHandler} />
      <Button text="6" clickHandler={btnClickHandler} />
      <Button text="-" clickHandler={btnClickHandler} color="Orange" />

      <Button text="1" clickHandler={btnClickHandler} />
      <Button text="2" clickHandler={btnClickHandler} />
      <Button text="3" clickHandler={btnClickHandler} />
      <Button text="+" clickHandler={btnClickHandler} color="Orange" />

      <Button text="0" clickHandler={btnClickHandler} columns="2" />
      <Button text="." clickHandler={btnClickHandler} />
      <Button text="=" clickHandler={btnClickHandler} color="Orange" />
    </section>
  );
}
