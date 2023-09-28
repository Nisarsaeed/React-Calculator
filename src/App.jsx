import React from 'react';
import { useCalculator } from './Hooks/useCalculator';
import { Display } from './components/Display';
import { KeysPannel } from './components/Keys/KeysPannel';
import './App.css';

export function App() {
  const {
    previousVal,
    result,
    calculate,
    numKeyClicked,
    operatorClicked,
    resetValues
  } = useCalculator();

  function handleClick({ target: { textContent: clickedValue } }) {
    switch (clickedValue) {
      case '+':
      case '-':
      case '/':
      case 'x':
        operatorClicked(clickedValue);
        break;
      case '=':
        calculate();
        break;
      case 'AC':
        resetValues();
        break;
      default:
        if (/^[0-9]+$/.test(clickedValue)) {
          numKeyClicked(clickedValue);
        }
    };
  };

  return (
    <div className="App">
      <div className="calculator">
        <Display displayValue={result} preValue = {previousVal} />
        <KeysPannel onKeyClick={handleClick} />
      </div>
    </div>
  );
};