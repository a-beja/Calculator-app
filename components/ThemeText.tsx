import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps } from 'react-native';

interface Props extends TextProps {
    variant?: 'h1' | 'h2';
    children: string;
}

const ThemeText = ({ children = '', variant = 'h1', ...rest }: Props) => {
  
  const operators: string[] = ['+', '-', 'x', '÷'];
  const formParts: string[] = children.split(/([x+÷-])/);
  
  const content = variant === 'h1' ?
    formParts.map((part, i) => (
      <Text 
        key={ i }
        style={{ color: operators.includes( part ) ? Colors.operators : '' }}
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