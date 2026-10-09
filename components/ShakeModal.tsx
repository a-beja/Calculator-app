import { globalStyles } from '@/styles/global-styles';
import { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

import useShake from '@/hooks/useShaker';

const ShakeModal = () => {
  const [visible, setVisible] = useState(false);

  useShake(() => setVisible(true));

  const close = () => setVisible(false);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={close}>
      <View style={globalStyles.overlay}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.title}>Hi! 🍓</Text>

          <Text style={globalStyles.body}>
            {`This is my very first mobile app. Huge shout-out to my friends Eyixi and Alex for their support :)\n\n- Abril`}
          </Text>

          <Pressable
            style={({ pressed }) => [globalStyles.buttonModal, pressed && globalStyles.buttonModalPressed]}
            onPress={close}
          >
            <Text style={globalStyles.buttonModalText}>Aceptar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ShakeModal;