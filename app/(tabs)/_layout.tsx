import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            initialRouteName="profil"  // <-- ici, on démarre sur Profil
            screenOptions={{
                tabBarActiveTintColor: '#cbae4cff',
            }}
        >
            <Tabs.Screen
                name="index"  // Correspond à / (accueil)
                options={{
                    title: 'Accueil',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profil"  // Correspond à /profil
                options={{
                    title: 'Profil',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person-sharp' : 'person-outline'} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(sandbox)"  // Correspond au groupe /sandbox
                options={{
                    title: 'Sandbox',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'flask' : 'flask-outline'} size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
