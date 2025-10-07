import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Playground: React.FC = () => {
    return (
        <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
            <Text style={{ fontSize: 22, marginBottom: 30 }}>
                🧪 Sandbox - Espace Maxime
            </Text>

            {/* Tu peux activer/désactiver des exos selon le jour */}
            <Button
                title="➡️ Exo 1 — useState"
                onPress={() => router.push("../(sandbox)/exo-state")}
            />
            <Button
                title="➡️ Exo 2 — useEffect"
                onPress={() => router.push("../(sandbox)/exo-effect")}
            />
            <Button
                title="➡️ Exo 3 — useContext"
                onPress={() => router.push("../(sandbox)/exo-context")}
            />
            <Button
                title="➡️ Exo 4 — Zustand"
                onPress={() => router.push("../(sandbox)/exo-zustand")}
            />

            <Button
                title="➡️ Exo 4 — Formulaire"
                onPress={() => router.push("../(sandbox)/exo-formulaire")}
            />
        </View>
    );
};

export default Playground;