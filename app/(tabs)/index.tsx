import { Link } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

type Logement = {
    id: string;
    title: string;
    price: number;
    image?: string;
};

export default function IndexScreen() {
    const [data, setData] = useState<Logement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch('https://gist.githubusercontent.com/Fabsforce/a76097aa83d4f5d1b3c5c9868e2d51d3/raw/25d6501b6a6969268b47b489b32629f2d0eb223d/logements.json');
                if (!res.ok) throw new Error('Réponse réseau incorrecte');
                const json = await res.json();
                setData(json);
            } catch (e: any) {
                setError(e?.message ?? String(e));
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const recommended = useMemo(() => data.slice(0, 6), [data]);

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

    const renderCard = ({ item }: { item: Logement }) => (
        <Link href={`/(tabs)/explorer/${item.id}`} asChild>
            <Pressable style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardPrice}>{item.price} €/nuit</Text>
                </View>
            </Pressable>
        </Link>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={recommended}
                keyExtractor={(item) => String(item.id)}
                renderItem={renderCard}
                contentContainerStyle={styles.list}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={styles.h1}>Recommandés pour vous</Text>
                        <Text style={styles.sub}>Inspirés de vos préférences et tendances locales</Text>
                    </View>
                }
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
    list: { paddingHorizontal: 16, paddingVertical: 16 },
    header: { marginBottom: 8 },
    h1: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
    sub: { fontSize: 14, color: '#666' },
    card: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
    },
    cardImage: { width: 100, height: 60, borderRadius: 6, marginRight: 12, backgroundColor: '#ddd' },
    cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
    cardPrice: { fontSize: 16, color: 'gray' },
});
