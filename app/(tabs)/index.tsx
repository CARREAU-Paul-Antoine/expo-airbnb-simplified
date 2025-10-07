import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

type Appartement = {
    id: string;
    nom: string;
    prix: number;
};

const appartements: Appartement[] = [
    { id: '1', nom: 'Appartement Cosy', prix: 80 },
    { id: '2', nom: 'Loft Lumineux', prix: 120 },
    { id: '3', nom: 'Studio Moderne', prix: 70 },
    { id: '4', nom: 'Duplex Élégant', prix: 150 },
    { id: '5', nom: 'Appartement Cosy', prix: 80 },
    { id: '6', nom: 'Loft Lumineux', prix: 120 },
    { id: '7', nom: 'Studio Moderne', prix: 70 },
    { id: '8', nom: 'Duplex Élégant', prix: 150 },
    { id: '9', nom: 'Appartement Cosy', prix: 80 },
    { id: '10', nom: 'Loft Lumineux', prix: 120 },
    { id: '11', nom: 'Studio Moderne', prix: 70 },
    { id: '12', nom: 'Duplex Élégant', prix: 150 },
];


const AppartementItem: React.FC<{ item: Appartement }> = ({ item }) => (
    <View style={styles.card}>
        <Text style={styles.nom}>{item.nom}</Text>
        <Image source={{ uri: 'https://picsum.photos/400/200' }} style={styles.image} />
        <Text style={styles.prix}>{item.prix} €/nuit</Text>
    </View>
);

const AppartementList: React.FC = () => {
    return (
        <View style={styles.container}>
            <FlatList<Appartement>
                data={appartements}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <AppartementItem item={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#f5f6fa',
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 1, height: 2 },
    },
    image: {
        width: 100,
        height: 60,
        borderRadius: 6,
        marginRight: 12,
    },
    nom: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    prix: {
        fontSize: 16,
        color: '#38ada9',
        marginTop: 6,
    },
});

export default AppartementList;
