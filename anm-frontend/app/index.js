// app/index.js
import { useEffect } from 'react';
import { router } from 'expo-router';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function IndexPage() {
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Por enquanto sempre redireciona para login
      const isLoggedIn = false;
      
      setTimeout(() => {
        if (isLoggedIn) {
          router.replace('/(tabs)');
        } else {
          router.replace('/auth/login');
        }
      }, 1000);
      
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      router.replace('/auth/login');
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
});