import { Stack } from "expo-router";

export default function SandboxLayout() {
  return (
    <Stack>
      <Stack.Screen name="playground" options={{ title: "Sandbox" }} />
      <Stack.Screen name="exo-state" options={{ title: "Exo useState" }} />
      <Stack.Screen name="exo-effect" options={{ title: "Exo useEffect" }} />
      <Stack.Screen name="exo-context" options={{ title: "Exo useContext" }} />
      <Stack.Screen name="exo-formulaire" options={{ title: "Exo Formulaire" }} />
      <Stack.Screen name="exo-zustand" options={{ title: "Exo Zustand" }} />
    </Stack>
  );
}