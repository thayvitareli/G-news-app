import { Pressable, Text, View } from 'react-native';
import { Article } from '@/types';
import { Image } from 'expo-image';
import { formatTimeAgo } from '@/utils';

export default function ListCard({
  article,
  onNavigateToArticle,
}: {
  article: Article;
  onNavigateToArticle: (article: Article) => void;
}) {
  return (
    <Pressable
      onPress={() => onNavigateToArticle(article)}
      className="mb-1 flex-row items-center gap-2 border-b border-slate-500 pb-2">
      <View className="w-[70%] gap-1">
        <Text className="mb-1 text-lg font-bold text-white">{article.title}</Text>
        <Text numberOfLines={2} className="text-slate-500">
          {article.description}
        </Text>

        <Text className="mt-1 text-sm text-slate-500">
          {article.source.name} • {formatTimeAgo(article.publishedAt)}
        </Text>
      </View>
      {article.urlToImage && (
        <Image
          source={{ uri: article.urlToImage }}
          style={{ width: 100, height: 100, borderRadius: 10, objectFit: 'cover' }}
        />
      )}
    </Pressable>
  );
}
