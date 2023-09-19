import { useState } from "react";
export function useCalculator() {
    const [result, setResult] = useState('');
    const [firstValue, setFirstValue] = useState(0);
    const [selectedOperator, setSelectedOperator] = useState('');
    function numKeyClicked(number) {
        setResult((currentValue) => currentValue += number);
    };
    function operatorClicked(operator) {
        setFirstValue((value) => value = parseFloat(result));
        setResult((preValue) => preValue = '');
        setSelectedOperator((currentOperator) => currentOperator = operator);
    };
    function calculate() {
        setResult((value) => parseFloat(value));
        switch (selectedOperator) {
            case '+':
                setResult((preValue) => firstValue + preValue);
                break;
            case '-':
                setResult((preValue) => firstValue - preValue);
                break;
            case 'x':
                setResult((preValue) => firstValue * preValue);
                break;
            case '/':
                setResult((preValue) => firstValue / preValue);
                break;
            default:
                console.log('No operator selected');
        };
    };
    function resetValues() {
        setFirstValue((currentValue) => currentValue = 0);
        setResult((value) => value = '');
        setSelectedOperator((operator) => operator = '');
    };
    return {
        result,
        calculate,
        numKeyClicked,
        operatorClicked,
        resetValues
    };
};