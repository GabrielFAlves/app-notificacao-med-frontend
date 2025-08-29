// app/(tabs)/index.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [userName] = useState('João Silva'); // Substituir por dados reais do usuário

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => {
            // Aqui você limparia o token/dados do usuário
            // AsyncStorage.removeItem('userToken');
            router.replace('/auth/login');
          }
        }
      ]
    );
  };

  const QuickActionCard = ({ icon, title, subtitle, onPress, color = "#007AFF" }) => (
    <TouchableOpacity style={[styles.actionCard, { borderLeftColor: color }]} onPress={onPress}>
      <View style={styles.actionIcon}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
      <View style={styles.actionContent}>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text style={styles.actionSubtitle}>{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
  );

  const StatCard = ({ title, value, icon, color = "#007AFF" }) => (
    <View style={[styles.statCard, { backgroundColor: color + '15' }]}>
      <View style={[styles.statIcon, { backgroundColor: color }]}>
        <Ionicons name={icon} size={20} color="#fff" />
      </View>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{userName.charAt(0)}</Text>
            </View>
            <View>
              <Text style={styles.greeting}>Olá, {userName.split(' ')[0]}! 👋</Text>
              <Text style={styles.subGreeting}>Bem-vindo de volta</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton} onPress={() => Alert.alert('Notificações', 'Você não tem notificações')}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Resumo</Text>
          <View style={styles.statsRow}>
            <StatCard 
              title="Tarefas" 
              value="12" 
              icon="checkmark-circle" 
              color="#34C759" 
            />
            <StatCard 
              title="Mensagens" 
              value="5" 
              icon="mail" 
              color="#007AFF" 
            />
            <StatCard 
              title="Eventos" 
              value="3" 
              icon="calendar" 
              color="#FF9500" 
            />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          
          <QuickActionCard
            icon="person-circle-outline"
            title="Meu Perfil"
            subtitle="Visualizar e editar informações"
            color="#007AFF"
            onPress={() => Alert.alert('Perfil', 'Tela de perfil em desenvolvimento')}
          />
          
          <QuickActionCard
            icon="settings-outline"
            title="Configurações"
            subtitle="Preferências e ajustes"
            color="#8E8E93"
            onPress={() => Alert.alert('Configurações', 'Tela de configurações em desenvolvimento')}
          />
          
          <QuickActionCard
            icon="help-circle-outline"
            title="Ajuda & Suporte"
            subtitle="FAQ e contato"
            color="#34C759"
            onPress={() => Alert.alert('Ajuda', 'Central de ajuda em desenvolvimento')}
          />
          
          <QuickActionCard
            icon="analytics-outline"
            title="Relatórios"
            subtitle="Visualizar estatísticas"
            color="#AF52DE"
            onPress={() => Alert.alert('Relatórios', 'Relatórios em desenvolvimento')}
          />
        </View>

        {/* Recent Activity */}
        <View style={styles.activityContainer}>
          <Text style={styles.sectionTitle}>Atividade Recente</Text>
          
          <View style={styles.activityItem}>
            <View style={[styles.activityDot, { backgroundColor: '#34C759' }]} />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Tarefa completada</Text>
              <Text style={styles.activityTime}>Há 2 horas</Text>
            </View>
          </View>
          
          <View style={styles.activityItem}>
            <View style={[styles.activityDot, { backgroundColor: '#007AFF' }]} />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Nova mensagem recebida</Text>
              <Text style={styles.activityTime}>Há 5 horas</Text>
            </View>
          </View>
          
          <View style={styles.activityItem}>
            <View style={[styles.activityDot, { backgroundColor: '#FF9500' }]} />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Evento adicionado ao calendário</Text>
              <Text style={styles.activityTime}>Ontem</Text>
            </View>
          </View>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
            <Text style={styles.logoutText}>Sair da conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statTitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  activityContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  activityDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 16,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  activityTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  logoutContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FF3B30',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
    marginLeft: 8,
  },
});