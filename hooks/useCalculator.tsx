import { useEffect, useState } from "react";

import { evaluate } from 'mathjs';


export const useCalculator = () => {

    const [formula, setFormula] = useState('0');
    const [result, setResult] = useState(0);

    const operators = ['+', '-', 'x', '÷'];

    
    useEffect(() => {
        if( formula !== '0' ){
            calculateResult();
        }
    }, [formula] );


    const getLastNumber = (): string => {
        // Separate each number (splited by operators) to get the last one
        const parts = formula.split(/[+\-x÷]/);
        return parts[ parts.length - 1 ];
    }

    const clean = () => {
        setFormula('0');
    }

    const deleteLast = () => {
        if (formula.length === 1) {
            setFormula('0');
        } else {
            setFormula(formula.slice(0, -1));
        }
    }

    const buildFormula = ( newDigit: string ) => {
        let lastNumber = getLastNumber();
        
        // To delete the first 0 when a new digit (not 0) is added, to have lastNumber = 5 instead = 05
        if( lastNumber === '0' && newDigit !== '.'){
            setFormula(formula.slice(0, -1) + newDigit);
            return;
        }

        // To put a 0 before a point when lastNumber is empty
        if( lastNumber === '' && newDigit === '.'){
            return setFormula( formula + '0' + newDigit );
        }

        // To avoid having more than one period
        if( lastNumber.includes('.') && newDigit === '.' ){
            console.log('hola, ya tengo un punto y quiero poner otro');
            return;
        }

        // To avoid lastNumber = 0000 when it's not 0.000
        if( lastNumber === '0' && newDigit === '0') return;

        if( operators.includes( newDigit ) && operators.some( op => formula.endsWith(op)) ){
            setFormula( formula.slice(0, -1) + newDigit );
            return;
        }
        
        setFormula( formula + newDigit );
    }

    const calculateResult = () => {
        const operators = ['+', '-', 'x', '÷'];

        let expr = formula;
        
        if( operators.some(op => expr.endsWith(op)) ){
            expr = expr.slice(0, -1);
        }

        const expression = expr
            .replace(/x/g, '*')
            .replace(/÷/g, '/');
        
        const res = evaluate(expression);
        const resFixed = parseFloat(res.toFixed(5));
        setResult( resFixed );
    }

    return {
        formula,
        result,

        buildFormula,
        clean,
        deleteLast,
        calculateResult
    }
}