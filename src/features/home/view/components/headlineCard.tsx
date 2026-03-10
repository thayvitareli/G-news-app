import { Pressable, Text, View } from 'react-native';
import { Article } from '@/types';
import { ImageBackground } from 'expo-image';
import { formatTimeAgo } from '@/utils';

export default function HeadlineCard({
  article,
  onNavigateToArticle,
}: {
  article: Article;
  onNavigateToArticle: (article: Article) => void;
}) {
  return (
    <Pressable
      onPress={() => onNavigateToArticle(article)}
      className="mr-4 h-[360px] w-[300px] overflow-hidden rounded-xl">
      <ImageBackground
        source={{
          uri:
            article.urlToImage ||
            'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=300&h=360&fit=crop',
        }}
        style={{ flex: 1 }}
        contentFit="cover">
        <View className="absolute inset-0 bg-black/20" />
        <View
          className="absolute bottom-0 h-[100%] w-full bg-black/10"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -20 },
            shadowOpacity: 0.8,
            shadowRadius: 30,
          }}
        />

        <View className="flex-1 justify-end p-5">
          <Text className="mb-3 text-xl font-bold leading-6 text-[#E1E1E1]" numberOfLines={4}>
            {article.title}
          </Text>

          <View className="mb-3 self-start rounded bg-[#00E5FF] px-2.5 py-1">
            <Text className="text-[10px] font-semibold uppercase tracking-widest text-[#121212]">
              {article.source.name} • {formatTimeAgo(article.publishedAt)}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
