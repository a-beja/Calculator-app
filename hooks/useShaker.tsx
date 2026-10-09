import { Accelerometer } from 'expo-sensors';
import { Platform } from 'react-native';
import { useEffect } from 'react';

export default function useShake(onShake: () => void, threshold = 2) {
  useEffect(() => {
    if (Platform.OS === 'web') return;

    const sub = Accelerometer.addListener(({ x, y, z }) => {
      if (Math.sqrt(x * x + y * y + z * z) > threshold) onShake();
    });
    return () => sub.remove();
  }, [onShake, threshold]);
}