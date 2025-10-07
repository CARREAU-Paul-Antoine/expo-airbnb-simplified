import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profil() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenue sur la page Profil !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#38ada9',
    },
});
