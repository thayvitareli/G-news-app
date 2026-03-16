import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Article } from '@/types';
import { Feather, Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import ListCard from '@/components/ui/ListCard';
import { LinearGradient } from 'expo-linear-gradient';

interface ArticleViewProps {
  article: Article | null;
  relatedNews: Article[] | undefined;
  handleGoBack: () => void;
  handleNavigateToRelatedArticle: (article: Article) => void;
}

export const ArticleView = ({
  article,
  relatedNews,
  handleGoBack,
  handleNavigateToRelatedArticle,
}: ArticleViewProps) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  if (!article) {
    return (
      <View className="flex-1 items-center justify-center bg-[#0F1622]">
        <ActivityIndicator size="large" color="#00E5FF" />
      </View>
    );
  }

  const HEADER_HEIGHT = 400;

  return (
    <View className="flex-1 bg-[#0F1622]">
      <StatusBar style="light" />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header Image */}
        <View style={{ width, height: HEADER_HEIGHT }}>
          {article.urlToImage ? (
            <Image
              source={{ uri: article.urlToImage }}
              contentFit="cover"
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <View className="flex-1 bg-slate-800" />
          )}

          <LinearGradient
            colors={['rgba(15,22,34,0)', 'rgba(15,22,34,1)']}
            style={{ position: 'absolute', bottom: 0, width: '100%', height: 200 }}
          />

          {/* Top Actions */}
          <View
            className="absolute w-full flex-row justify-between px-5"
            style={{ top: Math.max(insets.top, 20) }}>
            <Pressable
              onPress={handleGoBack}
              className="h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
              <Feather name="chevron-left" size={24} color="white" />
            </Pressable>

          
              <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
                <Feather name="bookmark" size={20} color="white" />
              </Pressable>
         
          </View>
        </View>

        {/* Content */}
        <View className="-mt-10 flex-1 px-5">
          {/* Author info */}
          <View className="mb-4 flex-row items-center">
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-full bg-blue-500">
              <Text className="text-xs font-bold text-white">
                {article.source.name.substring(0, 2).toUpperCase()}
              </Text>
            </View>
            <View>
              <Text className="font-semibold text-blue-400">{article.source.name}</Text>
              <Text className="text-xs text-slate-400">
                Publicado {dayjs(article.publishedAt).format('D MMM')} • 5 min de leitura
              </Text>
            </View>
          </View>

          {/* Title */}
          <Text className="mb-6 text-3xl font-bold leading-tight text-white">{article.title}</Text>

          {/* Text content - mocking the initial text if content is empty or incomplete */}
          <Text className="mb-6 text-base leading-relaxed text-slate-300">
            {article.description || 'Nenhuma descrição disponível para esta notícia.'}
          </Text>

          {article.content && (
            <Text className="mb-8 text-base leading-relaxed text-slate-300">
              {article.content}
            </Text>
          )}

          {/* Highlight Quote */}
          {article.content && (
            <View className="mb-8 flex-row pr-4">
              <View className="mr-4 w-1 bg-blue-400" />
              <Text className="text-lg italic tracking-wide text-slate-200">
                {article.content}
              </Text>
            </View>
          )}

          {/* Leia Também */}
          <View className="mb-4 mt-4">
            <View className="mb-6 flex-row items-center">
              <View className="mr-3 h-6 w-1 bg-blue-400" />
              <Text className="text-xl font-bold text-white">Leia Também</Text>
            </View>

            {relatedNews?.slice(0, 3).map((item, index) => (
              <ListCard
                key={index}
                article={item}
                onNavigateToArticle={handleNavigateToRelatedArticle}
              />
            ))}
          </View>
        </View>
      </ScrollView>

    </View>
  );
};
