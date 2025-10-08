import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Text, View } from 'react-native';

export default function App() {
    const [permission, requestPermission] = useCameraPermissions();
    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }
    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View>
                <Text> Besoin d'accès à la caméra !</Text>
                <Button onPress={requestPermission} title="Autoriser" />
            </View>
        );
    }
    // Camera permissions are granted
    return <CameraView style={{ flex: 1 }} />;
}