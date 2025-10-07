import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#38ada9',
                headerShown: false,
            }}>
            <Tabs.Screen
                name="appartements"
                options={{ title: 'Appartements' }}
            />
            <Tabs.Screen
                name="profil"
                options={{ title: 'Profil' }}
            />
        </Tabs>
    );
}
