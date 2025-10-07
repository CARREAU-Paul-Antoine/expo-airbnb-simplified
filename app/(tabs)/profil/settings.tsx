import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      "Déconnexion",
      "Êtes-vous sûr de vouloir vous déconnecter ?",
      [
        { text: "Annuler", style: "cancel" },
        { text: "Déconnexion", style: "destructive", onPress: () => console.log("Déconnecté") }
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Supprimer le compte",
      "Cette action est irréversible. Voulez-vous vraiment supprimer votre compte ?",
      [
        { text: "Annuler", style: "cancel" },
        { text: "Supprimer", style: "destructive", onPress: () => console.log("Compte supprimé") }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>⚙️ Paramètres</Text>
        <Text style={styles.subtitle}>Gérez vos préférences et votre compte</Text>
      </View>

      {/* Section Notifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔔 Notifications</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="notifications" size={20} color="#4CAF50" style={styles.settingIcon} />
            <View>
              <Text style={styles.settingLabel}>Notifications push</Text>
              <Text style={styles.settingDescription}>Recevoir les notifications sur votre appareil</Text>
            </View>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#ddd', true: '#4CAF50' }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="mail" size={20} color="#2196F3" style={styles.settingIcon} />
            <View>
              <Text style={styles.settingLabel}>Emails marketing</Text>
              <Text style={styles.settingDescription}>Recevoir des offres et promotions</Text>
            </View>
          </View>
          <Switch
            value={marketing}
            onValueChange={setMarketing}
            trackColor={{ false: '#ddd', true: '#4CAF50' }}
          />
        </View>
      </View>

      {/* Section Apparence */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎨 Apparence</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="moon" size={20} color="#9C27B0" style={styles.settingIcon} />
            <View>
              <Text style={styles.settingLabel}>Mode sombre</Text>
              <Text style={styles.settingDescription}>Basculer vers le thème sombre</Text>
            </View>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#ddd', true: '#4CAF50' }}
          />
        </View>
      </View>

      {/* Section Confidentialité */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔒 Confidentialité</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="location" size={20} color="#FF5722" style={styles.settingIcon} />
            <View>
              <Text style={styles.settingLabel}>Partage de localisation</Text>
              <Text style={styles.settingDescription}>Permettre le partage de votre position</Text>
            </View>
          </View>
          <Switch
            value={location}
            onValueChange={setLocation}
            trackColor={{ false: '#ddd', true: '#4CAF50' }}
          />
        </View>

        <TouchableOpacity style={styles.linkItem}>
          <Ionicons name="shield-checkmark" size={20} color="#607D8B" style={styles.settingIcon} />
          <Text style={styles.linkLabel}>Politique de confidentialité</Text>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem}>
          <Ionicons name="document-text" size={20} color="#607D8B" style={styles.settingIcon} />
          <Text style={styles.linkLabel}>Conditions d'utilisation</Text>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Section Compte */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👤 Compte</Text>
        
        <TouchableOpacity style={styles.linkItem}>
          <Ionicons name="person" size={20} color="#795548" style={styles.settingIcon} />
          <Text style={styles.linkLabel}>Modifier le profil</Text>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem}>
          <Ionicons name="key" size={20} color="#795548" style={styles.settingIcon} />
          <Text style={styles.linkLabel}>Changer le mot de passe</Text>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem}>
          <Ionicons name="card" size={20} color="#795548" style={styles.settingIcon} />
          <Text style={styles.linkLabel}>Moyens de paiement</Text>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Section Support */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>❓ Support</Text>
        
        <TouchableOpacity style={styles.linkItem}>
          <Ionicons name="help-circle" size={20} color="#FF9800" style={styles.settingIcon} />
          <Text style={styles.linkLabel}>Centre d'aide</Text>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem}>
          <Ionicons name="chatbubble" size={20} color="#FF9800" style={styles.settingIcon} />
          <Text style={styles.linkLabel}>Nous contacter</Text>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem}>
          <Ionicons name="star" size={20} color="#FF9800" style={styles.settingIcon} />
          <Text style={styles.linkLabel}>Évaluer l'application</Text>
          <Ionicons name="chevron-forward" size={16} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Section Actions dangereuses */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚠️ Zone dangereuse</Text>
        
        <TouchableOpacity style={styles.dangerItem} onPress={handleLogout}>
          <Ionicons name="log-out" size={20} color="#F44336" style={styles.settingIcon} />
          <Text style={[styles.linkLabel, styles.dangerText]}>Se déconnecter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dangerItem} onPress={handleDeleteAccount}>
          <Ionicons name="trash" size={20} color="#F44336" style={styles.settingIcon} />
          <Text style={[styles.linkLabel, styles.dangerText]}>Supprimer le compte</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.version}>Version 1.0.0</Text>
        <Text style={styles.copyright}>© 2024 Airbnb Simplified</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 15,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 13,
    color: '#666',
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  linkLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 15,
  },
  dangerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff5f5',
  },
  dangerText: {
    color: '#F44336',
  },
  footer: {
    padding: 30,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  copyright: {
    fontSize: 12,
    color: '#bbb',
  },
});
