import { useState } from "react";

export function useCalculator() {
    const [display, setDisplay] = useState({result:'',previousVal:0});
    const [selectedOperator, setSelectedOperator] = useState('');
    let {result, previousVal} = display;
    
    function convertResultTOFloat(){
        return parseFloat(result);
    };
    function numKeyClicked(number) {
        setDisplay({...display,result: result+=number});
    };
    function operatorClicked(operator) {
        const resultToFloat = convertResultTOFloat();
        setDisplay({previousVal: resultToFloat, result:''});
        setSelectedOperator(operator);
    };

    let calculation = 0;

    function calculate() {
        const resultToFloat = convertResultTOFloat();
        
        switch (selectedOperator) {
            case '+':
                calculation = previousVal + resultToFloat;
                break;
            case '-':
                calculation = previousVal - resultToFloat;
                break;
            case 'x':
                calculation = previousVal * resultToFloat;
                break;
            case '/':
                calculation = previousVal / resultToFloat;
                break;
            default:
                console.log('No operator selected');
        };

        setDisplay((prevDisplay) => ({
            ...prevDisplay,
            previousVal: resultToFloat,
            result: calculation
        }));
    };
    function resetValues() {
        setDisplay({previousVal:0, result:''});
        setSelectedOperator('');
    };

    return {
        previousVal,
        result,
        calculate,
        numKeyClicked,
        operatorClicked,
        resetValues
    };
};