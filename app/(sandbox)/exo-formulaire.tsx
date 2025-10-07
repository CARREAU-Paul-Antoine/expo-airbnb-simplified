import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function ExoFormulaire() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16, gap: 12 }}>
      <Text>Entrez votre nom :</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Votre nom"
        style={{ width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8 }}
        onSubmitEditing={() => setSubmitted(name)}
        returnKeyType="done"
      />
      <Button title="Valider" onPress={() => setSubmitted(name)} />
      {submitted ? <Text>Bonjour {submitted} !</Text> : null}
    </View>
  );
}


