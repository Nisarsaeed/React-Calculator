import { useState, } from 'react';
import './App.css';
import KeysPannel from './components/KeysPannel';
import Display from './components/Display';
function App() {
  const [result, setResult] = useState('');
  const [firstValue, setFirstValue] = useState(0);
  const [operator, setOperator] = useState('');
  function handleClick(event) {
    const value = event.target.textContent;
    switch (value) {
      case '+':
      case '-':
      case '/':
      case 'x':
        operatorClicked(value);
        break;
      case '=':
        calculate();
        break;
      case 'AC':
        resetValues();
        break;
      default:
        if (/^[0-9]+$/.test(value)) {
          numKeyClicked(value);
        }
    }
  }
  function numKeyClicked(number) {
    setResult((prevResult) => prevResult += number);
  }
  function operatorClicked(oper) {
    setFirstValue((value) => value = parseFloat(result));
    setOperator((operator) => operator = oper);
    setResult((preValue) => preValue = '');
  }
  function calculate() {
    setResult((value) => parseFloat(value));
    switch (operator) {
      case '+':
        setResult((preValue) => preValue + firstValue);
        break;
      case '-':
        setResult((preValue) => preValue - firstValue);
        break;
      case 'x':
        setResult((preValue) => preValue * firstValue);
        break;
      case '/':
        setResult((preValue) => preValue / firstValue);
        break;
      default:
        console.log('No operator selected');
    }
  }
  function resetValues() {
    setFirstValue((value) => value = 0);
    setResult((value) => value = '');
    setOperator((oper) => oper = '');
  }
  return (
    <div className="App">
      <div className="calculator">
        <Display displayValue={result} />
        <KeysPannel onKeyClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
