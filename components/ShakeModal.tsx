import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import useShake from '@/hooks/useShaker';

const ShakeModal = () => {
  const [visible, setVisible] = useState(false);

  useShake(() => setVisible(true));

  const close = () => setVisible(false);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={close}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Hi! 🍓</Text>

          <Text style={styles.body}>
            {`This is my very first mobile app. Huge shout-out to my friends Eyixi and Alex for their support :)\n\n- Abril`}
          </Text>

          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={close}
          >
            <Text style={styles.buttonText}>Aceptar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '80%',
    maxWidth: 320,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  body: {
    fontSize: 13,
    lineHeight: 19,
    color: '#6b7280',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#e8a108',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ShakeModal;