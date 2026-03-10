import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { HomeHeader } from './components/header';
import HeadlineCard from '@/features/home/view/components/headlineCard';
import { Article } from '@/types';
import ListCard from '@/components/ui/ListCard';

interface HomeViewProps {
  onNavigateToArticle: (article: Article) => void;
  onNavigateToSearch: () => void;
  breakingNews: Article[];
  lastNews: Article[];
  isLoading: boolean;
  isLoadingBreakingNews: boolean;
}
export const HomeView = ({
  onNavigateToArticle,
  onNavigateToSearch,
  breakingNews,
  lastNews,
  isLoading,
  isLoadingBreakingNews,
}: HomeViewProps) => {
  if (isLoading || isLoadingBreakingNews) {
    return <ActivityIndicator className="flex-1 items-center justify-center" />;
  }

  return (
    <SafeAreaView className="flex-1 gap-4  bg-background-dark ">
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <HomeHeader />

        <View className="mb-6">
          <View className="mb-4 flex-row items-center justify-between">
            <View className="flex-row items-center px-5">
              <View className="mr-2 h-6 w-1 bg-[#00E5FF]" />
              <Text className="text-2xl font-bold text-[#E1E1E1]">Breaking News</Text>
            </View>
            <Pressable
              onPress={onNavigateToSearch}
              className="text-[10px] font-bold uppercase tracking-widest text-[#00E5FF]">
              <Text>Ver tudo</Text>
            </Pressable>
          </View>

          <ScrollView
            horizontal
            contentContainerClassName="flex-grow px-5"
            showsHorizontalScrollIndicator={false}>
            {breakingNews?.map((article, index) => (
              <HeadlineCard
                key={index}
                article={article}
                onNavigateToArticle={onNavigateToArticle}
              />
            ))}
          </ScrollView>
        </View>

        <View className="px-5">
          <Text className="mb-4 mt-2 text-xl font-bold text-[#E1E1E1]">Last News</Text>
          {lastNews?.slice(0, 4).map((article, index) => (
            <ListCard key={index} article={article} onNavigateToArticle={onNavigateToArticle} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
