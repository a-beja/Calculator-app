import { View } from 'react-native';

import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import ShakeModal from '@/components/ShakeModal';
import { globalStyles } from '@/styles/global-styles';

const RootLayout = () => {

  const [ loaded ] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  if( !loaded ) {
    return null; // o también podemos mostrar un splashscreen
  }

  return (
    // Se usó flex: 1 para rellenar todo el background color.
    <View style={ globalStyles.background }>
      <Slot />


      <ShakeModal />

      <StatusBar style="light" />
    </View>
  )
}
export default RootLayout