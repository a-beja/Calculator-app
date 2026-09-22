import { Pressable, Text } from 'react-native';

import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';

import * as Haptics from 'expo-haptics';


interface Props {
    label: string;
    color?: 'lightGray' | 'darkGray' | 'cherry';
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

const CalculatorButton = ({ 
    label, 
    color = 'darkGray', 
    blackText = false, 
    doubleSize = false, 
    onPress
}: Props ) => {


  const colorStyles = {
    lightGray: Colors.lightGray,
    darkGray: Colors.darkGray,
    cherry: Colors.cherry
  }

  return (
    <Pressable 
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: colorStyles[color],
        opacity: pressed ? 0.5 : 1,
        width: doubleSize ? 170 : 80,
      })}
      onPress={ () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        onPress()
      }}
    >
      <Text 
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >
        { label }
      </Text>
    </Pressable>
  )
}
export default CalculatorButton