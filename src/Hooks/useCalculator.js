import { useState } from "react";

export function useCalculator() {
    const [display, setDisplay] = useState({result:'',firstValue:0});
    let {result, firstValue} = display;
    const [selectedOperator, setSelectedOperator] = useState('');
    let calculation = 0;

    function convertResultTOFloat(){
         return parseFloat(result);
    };
    function numKeyClicked(number) {
        setDisplay({...display,result: result+=number});
    };
    function operatorClicked(operator) {
        const resultToFloat = convertResultTOFloat();
        setDisplay({firstValue: resultToFloat, result:''});
        setSelectedOperator(operator);
    };
    function calculate() {
        const resultToFloat = convertResultTOFloat();
        switch (selectedOperator) {
            case '+':
                calculation = firstValue + resultToFloat;
                break;
            case '-':
                calculation = firstValue - resultToFloat;
                break;
            case 'x':
                calculation = firstValue * resultToFloat;
                break;
            case '/':
                calculation = firstValue / resultToFloat;
                break;
            default:
                console.log('No operator selected');
        };
        setDisplay((prevDisplay) => ({
            ...prevDisplay,
            firstValue: resultToFloat,
            result: calculation
        }));
    };
    function resetValues() {
        setDisplay({firstValue:0, result:''});
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