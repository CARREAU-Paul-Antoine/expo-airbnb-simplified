import { Stack } from 'expo-router';

export default function ExplorerLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Explorer' }} />
      <Stack.Screen name="[id]" options={{ title: 'Détail' }} />
    </Stack>
  );
}
