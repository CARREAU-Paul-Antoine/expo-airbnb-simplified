import DateTimePicker from '@react-native-community/datetimepicker';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { useReservation } from '../../contexts/ReservationContext';

export default function ExplorerDetail() {
  const { id } = useLocalSearchParams();
  const { addReservation } = useReservation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const fetchOne = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://gist.githubusercontent.com/Fabsforce/a76097aa83d4f5d1b3c5c9868e2d51d3/raw/25d6501b6a6969268b47b489b32629f2d0eb223d/logements.json');
        if (!res.ok) throw new Error('Réponse réseau incorrecte');
        const list = await res.json();
        const found = list.find((l) => String(l.id) === String(id));
        if (!found) throw new Error('Logement introuvable');
        setData(found);
      } catch (e) {
        setError(e.message ?? String(e));
      } finally {
        setLoading(false);
      }
    };
    fetchOne();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}> 
        <ActivityIndicator />
        <Text>Chargement...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Erreur: {error}</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.center}>
        <Text>Logement introuvable</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: data.title }} />
      <View style={{ flex: 1, padding: 16 }}>
        {data.image ? (
          <Image source={{ uri: data.image }} style={styles.image} />
        ) : null}
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>{data.price} €/nuit</Text>
        <Text style={styles.desc}>{data.description ?? 'Aucune description fournie.'}</Text>
        <View style={{ marginTop: 12, gap: 8 }}>
          <View>
            <Button title="Choisir une date" onPress={() => setShowPicker(true)} />
            <Text style={{ marginTop: 8 }}>Date sélectionnée: {selectedDate.toISOString().slice(0, 10)}</Text>
          </View>
          {showPicker ? (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={(_, date) => {
                setShowPicker(false);
                if (date) setSelectedDate(date);
              }}
            />
          ) : null}
          <Button
            title="Réserver"
            onPress={() => {
              try {
                addReservation({ logementId: String(id), nom: data.title, date: selectedDate.toISOString().slice(0, 10) });
                Alert.alert('Succès', 'Réservation enregistrée');
              } catch (e) {
                Alert.alert('Erreur', String(e?.message ?? e));
              }
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  image: { width: '100%', height: 180, borderRadius: 8, marginBottom: 12 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  price: { fontSize: 16, color: 'gray', marginBottom: 10 },
  desc: { fontSize: 14, color: '#444' },
});


