import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function ExoState() {
    const [count, setCount] = useState(0);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <Text>Compteur: {count}</Text>
            <Button title="+1" onPress={() => setCount(count + 1)} />
            <Button title="-1" onPress={() => setCount(count - 1)} />
            <Button title="Reset" onPress={() => setCount(0)} />
        </View>
    );
}