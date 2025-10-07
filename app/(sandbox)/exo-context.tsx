import React, { createContext, useContext, useState } from "react";
import { Button, Text, View } from "react-native";

type UserContextType = { name: string; setName: (name: string) => void };
const UserContext = createContext<UserContextType | undefined>(undefined);

export default function ExoContext() {
    const [name, setName] = useState("Alice");
    return (
        <UserContext.Provider value={{ name, setName }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
                <Greeting />
                <Changer />
            </View>
        </UserContext.Provider>
    );
}

function useUser() {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error("useUser doit être utilisé dans UserContext.Provider");
    return ctx;
}

function Greeting() {
    const { name } = useUser();
    return <Text>Bonjour {name} !</Text>;
}

function Changer() {
    const { name, setName } = useUser();
    return (
        <Button
            title={`Changer (${name})`}
            onPress={() => setName(name === "Alice" ? "Bob" : "Alice")}
        />
    );
}
