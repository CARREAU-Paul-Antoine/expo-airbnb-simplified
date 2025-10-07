import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function ExoEffect() {
  const [count, setCount] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setTick((t) => t + 1);
  }, [count]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Text>Compteur: {count}</Text>
      <Text>Effet déclenché: {tick} fois</Text>
      <Button title="Incrémenter" onPress={() => setCount((c) => c + 1)} />
    </View>
  );
}


