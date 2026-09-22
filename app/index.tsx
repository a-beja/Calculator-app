import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native';


const CalculatorApp = () => {

  const {
    formula,
    result,
    buildFormula,
    clean,
    deleteLast,
    calculateResult,
    newStart,
  } = useCalculator();

  return (
    <View style={ globalStyles.calculatorContainer }>
      
      {/* Resultados */}
      <View style={{ marginBottom: 20 }}>
        <ThemeText variant='h1' colorFormula>{formula}</ThemeText>
        <ThemeText variant='h2'>{result}</ThemeText>
      </View>

      {/* Filas de botones */}
      <View style={{ paddingHorizontal: 50}}>
        <View style={ globalStyles.row }>
          <CalculatorButton 
            label='C' 
            color='lightGray' 
            blackText={true} 
            doubleSize={true}
            onPress={() => clean() }
          />
          <CalculatorButton 
            label='←' 
            color='lightGray' 
            blackText={true} 
            onPress={() => deleteLast() }
          />
          <CalculatorButton 
            label='÷' 
            color ='cherry' 
            onPress={() => buildFormula('÷')}
          />
        </View>

        <View style={ globalStyles.row }>
          <CalculatorButton label='7' onPress={() => buildFormula('7')}/>
          <CalculatorButton label='8' onPress={() => buildFormula('8')}/>
          <CalculatorButton label='9' onPress={() => buildFormula('9')}/>
          <CalculatorButton label='x' color='cherry' onPress={() => buildFormula('x')}/>
        </View>
        <View style={ globalStyles.row }>
          <CalculatorButton label='4' onPress={() => buildFormula('4')}/>
          <CalculatorButton label='5' onPress={() => buildFormula('5')}/>
          <CalculatorButton label='6' onPress={() => buildFormula('6')}/>
          <CalculatorButton label='-' color = 'cherry' onPress={() => buildFormula('-')}/>
        </View>
        <View style={ globalStyles.row }>
          <CalculatorButton label='1' onPress={() => buildFormula('1')}/>
          <CalculatorButton label='2' onPress={() => buildFormula('2')}/>
          <CalculatorButton label='3' onPress={() => buildFormula('3')}/>
          
          <CalculatorButton 
            label='+' 
            color ='cherry' 
            onPress={() => buildFormula('+')}
          />
        </View>

        <View style={ globalStyles.row }>
          <CalculatorButton label='0' doubleSize={true} onPress={() => buildFormula('0')}/>
          <CalculatorButton label='.' onPress={() => buildFormula('.')}/>

          <CalculatorButton 
            label='=' 
            color ='cherry' 
            onPress={() => newStart() }
            />
        </View>
      </View>


    </View>
  )
}
export default CalculatorApp;