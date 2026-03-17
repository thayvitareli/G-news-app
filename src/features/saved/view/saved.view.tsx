import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListCard from '@/components/ui/ListCard';
import { Article } from '@/types';
import { Feather } from '@expo/vector-icons';

interface SavedViewProps {
  savedArticles: Article[];
  handleNavigateToArticle: (article: Article) => void;
}

export const SavedView = ({ savedArticles, handleNavigateToArticle }: SavedViewProps) => {
  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <StatusBar style="auto" />
      <View className="px-5 py-5 pb-2">
        <Text className="text-2xl font-bold text-[#E1E1E1]">Saved News</Text>
      </View>

      {savedArticles.length === 0 ? (
        <View className="flex-1 items-center justify-center px-8">
          <Feather name="bookmark" size={64} color="#334155" className="mb-4" />
          <Text className="text-center text-lg font-semibold text-slate-300">
            No saved news
          </Text>
          <Text className="mt-2 text-center text-sm text-slate-500">
            The news you save will appear here to be read later.
          </Text>
        </View>
      ) : (
        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
          {savedArticles.map((article, index) => (
            <View key={index} className="mb-2 mt-2">
              <ListCard article={article} onNavigateToArticle={handleNavigateToArticle} />
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
