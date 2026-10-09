import { Accelerometer } from 'expo-sensors';
import { useEffect } from 'react';

export default function useShake(onShake: () => void, threshold = 2) {
  useEffect(() => {
    const sub = Accelerometer.addListener(({ x, y, z }) => {
      if (Math.sqrt(x * x + y * y + z * z) > threshold) onShake();
    });
    return () => sub.remove();
  }, [onShake, threshold]);
}