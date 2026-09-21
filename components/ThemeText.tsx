import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps } from 'react-native';

interface Props extends TextProps {
    variant?: 'h1' | 'h2';
    colorFormula?: boolean;
}

const ThemeText = ({ children, variant = 'h1', colorFormula = false, ...rest }: Props) => {
  
  const operators = ['+', '-', 'x', '÷'];
  
  const content = colorFormula
    ? (children as string).split(/([x+÷-])/).map((part, i) => (
        <Text 
          key={ i }
          style={{ color: operators.includes( part ) ? Colors.pink : Colors.textPrimary }}
        >
          { part }
        </Text>
      ))
    : children;

  return (
    <Text 
        style={[
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult, 
        ]}
        numberOfLines={3}
        adjustsFontSizeToFit
        { ...rest }
    >
        { content }
    </Text>
  )
}
export default ThemeText