import { useState } from "react";

export function useCalculator() {
    const [result, setResult] = useState('');
    const [firstValue, setFirstValue] = useState(0);
    const [selectedOperator, setSelectedOperator] = useState('');
    let resultToFloat = 0;
    function convertResultTOFloat(){
         resultToFloat = parseFloat(result);
    };

    function numKeyClicked(number) {
        setResult((value)=> value += number);
    };
    function operatorClicked(operator) {
        convertResultTOFloat();
        setFirstValue(resultToFloat);
        setResult('');
        setSelectedOperator(operator);
    };
    function calculate() {
        convertResultTOFloat();
        setResult(resultToFloat);
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
        setFirstValue(0);
        setResult('');
        setSelectedOperator('');
    };
    return {
        result,
        calculate,
        numKeyClicked,
        operatorClicked,
        resetValues
    };
};