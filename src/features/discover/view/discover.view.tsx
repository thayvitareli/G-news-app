import React from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Article } from '@/types';
import ListCard from '@/components/ui/ListCard';
import { useDiscoverModel } from './discover.model';

interface DiscoverViewProps {
  model: ReturnType<typeof useDiscoverModel>;
  onNavigateToArticle: (article: Article) => void;
}

export const DiscoverView = ({ model, onNavigateToArticle }: DiscoverViewProps) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    articles,
    isLoading,
    categories,
  } = model;

  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <StatusBar style="light" />
      
      {/* Header */}
      <View className="px-5 py-4 flex-row items-center justify-between">
        <Text className="text-3xl font-bold text-white font-display">Explorar</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Search Bar */}
        <View className="px-5 mt-2 mb-6">
          <View className="flex-row items-center rounded-xl bg-slate-800/80 px-4 py-3">
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
              className="ml-3 flex-1 text-base placeholder:text-gray-400 text-white"
              placeholder="Buscar notícias..."
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              returnKeyType="search"
            />
          </View>
        </View>

        {/* Categories */}
        <View className="mb-6">
          <Text className="px-5 mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
            Escolher Categoria
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="px-5 gap-3"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <Pressable
                  key={cat.id}
                  onPress={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-5 py-2 ${
                    isActive ? 'bg-[#007AFF]' : 'bg-slate-800/80'
                  }`}
                >
                  <Text className={`text-sm ${isActive ? 'text-white font-bold' : 'text-gray-300'}`}>
                    {cat.label}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Results */}
        <View className="px-5">
          <View className="mb-4 flex-row items-center gap-2">
            <Text className="text-2xl font-bold text-white font-display">
              Resultados Recentes
            </Text>
            <View className="h-2 w-2 rounded-full bg-[#007AFF]" />
          </View>

          {isLoading ? (
            <ActivityIndicator className="mt-10" size="large" color="#007AFF" />
          ) : articles.length > 0 ? (
            <View className="gap-4 pb-10">
              {articles.map((article, index) => (
                <ListCard
                  key={`${article.url}-${index}`}
                  article={article}
                  onNavigateToArticle={onNavigateToArticle}
                />
              ))}
              {articles.length >= 10 && (
                <View className="items-center mt-6">
                  <ActivityIndicator color="#007AFF" />
                  <Text className="text-gray-400 text-sm mt-3">Carregando mais notícias...</Text>
                </View>
              )}
            </View>
          ) : (
            <Text className="mt-10 text-center text-gray-400">
              Nenhuma notícia encontrada para estes filtros.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
