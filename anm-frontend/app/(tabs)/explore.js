// app/(tabs)/explore.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const CategoryCard = ({ title, icon, count, color = "#007AFF" }) => (
    <TouchableOpacity style={[styles.categoryCard, { backgroundColor: color + '15' }]}>
      <View style={[styles.categoryIcon, { backgroundColor: color }]}>
        <Ionicons name={icon} size={24} color="#fff" />
      </View>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Text style={styles.categoryCount}>{count} itens</Text>
    </TouchableOpacity>
  );

  const FeaturedItem = ({ title, subtitle, image }) => (
    <TouchableOpacity style={styles.featuredItem}>
      <View style={styles.featuredImage}>
        <Ionicons name="image-outline" size={40} color="#ccc" />
      </View>
      <View style={styles.featuredContent}>
        <Text style={styles.featuredTitle}>{title}</Text>
        <Text style={styles.featuredSubtitle}>{subtitle}</Text>
        <View style={styles.featuredMeta}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={styles.featuredRating}>4.8</Text>
          <Text style={styles.featuredDot}>•</Text>
          <Text style={styles.featuredTime}>15 min</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Explorar</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#666"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color="#666" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            <CategoryCard 
              title="Tecnologia" 
              icon="phone-portrait-outline" 
              count="250" 
              color="#007AFF" 
            />
            <CategoryCard 
              title="Esportes" 
              icon="football-outline" 
              count="180" 
              color="#34C759" 
            />
            <CategoryCard 
              title="Música" 
              icon="musical-notes-outline" 
              count="320" 
              color="#AF52DE" 
            />
            <CategoryCard 
              title="Viagens" 
              icon="airplane-outline" 
              count="145" 
              color="#FF9500" 
            />
            <CategoryCard 
              title="Culinária" 
              icon="restaurant-outline" 
              count="200" 
              color="#FF3B30" 
            />
          </ScrollView>
        </View>

        {/* Featured Content */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Em Destaque</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          
          <FeaturedItem
            title="Curso de React Native"
            subtitle="Aprenda a criar apps incríveis"
            image="react"
          />
          
          <FeaturedItem
            title="Workshop de Design"
            subtitle="UI/UX para iniciantes"
            image="design"
          />
          
          <FeaturedItem
            title="Bootcamp de JavaScript"
            subtitle="Do zero ao avançado"
            image="js"
          />
        </View>

        {/* Trending */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending</Text>
          <View style={styles.trendingContainer}>
            <TouchableOpacity style={styles.trendingItem}>
              <View style={styles.trendingRank}>
                <Text style={styles.trendingNumber}>1</Text>
              </View>
              <View style={styles.trendingContent}>
                <Text style={styles.trendingTitle}>#ReactNative</Text>
                <Text style={styles.trendingCount}>12.5k posts</Text>
              </View>
              <Ionicons name="trending-up" size={16} color="#34C759" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.trendingItem}>
              <View style={styles.trendingRank}>
                <Text style={styles.trendingNumber}>2</Text>
              </View>
              <View style={styles.trendingContent}>
                <Text style={styles.trendingTitle}>#JavaScript</Text>
                <Text style={styles.trendingCount}>8.3k posts</Text>
              </View>
              <Ionicons name="trending-up" size={16} color="#34C759" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.trendingItem}>
              <View style={styles.trendingRank}>
                <Text style={styles.trendingNumber}>3</Text>
              </View>
              <View style={styles.trendingContent}>
                <Text style={styles.trendingTitle}>#Expo</Text>
                <Text style={styles.trendingCount}>5.1k posts</Text>
              </View>
              <Ionicons name="trending-up" size={16} color="#34C759" />
            </TouchableOpacity>
          </View>
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
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
  categoriesScroll: {
    paddingLeft: 20,
  },
  categoryCard: {
    width: 120,
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 12,
    color: '#666',
  },
  featuredItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuredImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featuredContent: {
    flex: 1,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredRating: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  featuredDot: {
    fontSize: 12,
    color: '#666',
    marginHorizontal: 8,
  },
  featuredTime: {
    fontSize: 12,
    color: '#666',
  },
  trendingContainer: {
    paddingHorizontal: 20,
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  trendingRank: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  trendingNumber: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  trendingContent: {
    flex: 1,
  },
  trendingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  trendingCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});