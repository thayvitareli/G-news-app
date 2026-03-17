import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { useState } from 'react';
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
  isSaved: boolean;
  handleGoBack: () => void;
  handleNavigateToRelatedArticle: (article: Article) => void;
  handleToggleSave: () => void;
}

export const ArticleView = ({
  article,
  relatedNews,
  isSaved,
  handleGoBack,
  handleNavigateToRelatedArticle,
  handleToggleSave,
}: ArticleViewProps) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [fontMultiplier, setFontMultiplier] = useState(1);

  const toggleFontSize = () => {
    setFontMultiplier((prev) => (prev >= 1.5 ? 1 : prev + 0.25));
  };

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

            <View className="flex-row gap-3">
              <Pressable
                onPress={toggleFontSize}
                className="h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
                <Ionicons name="text" size={20} color="white" />
              </Pressable>
              <Pressable
                onPress={handleToggleSave}
                className="h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
                <Ionicons
                  name={isSaved ? 'bookmark' : 'bookmark-outline'}
                  size={20}
                  color={isSaved ? '#00E5FF' : 'white'}
                />
              </Pressable>
            </View>
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
                Published {dayjs(article.publishedAt).format('MMM D')} • 5 min read
              </Text>
            </View>
          </View>

          {/* Title */}
          <Text className="mb-6 text-3xl font-bold leading-tight text-white">{article.title}</Text>

          {/* Text content - mocking the initial text if content is empty or incomplete */}
          <Text
            className="mb-6 leading-relaxed text-slate-300"
            style={{ fontSize: 16 * fontMultiplier }}>
            {article.description || 'No description available for this article.'}
          </Text>

          {article.content && (
            <Text
              className="mb-8 leading-relaxed text-slate-300"
              style={{ fontSize: 16 * fontMultiplier }}>
              {article.content}
            </Text>
          )}

          {/* Highlight Quote */}
          {article.content && (
            <View className="mb-8 flex-row pr-4">
              <View className="mr-4 w-1 bg-blue-400" />
              <Text
                className="italic tracking-wide text-slate-200"
                style={{ fontSize: 18 * fontMultiplier }}>
                {article.content}
              </Text>
            </View>
          )}

          {/* Leia Também */}
          <View className="mb-4 mt-4">
            <View className="mb-6 flex-row items-center">
              <View className="mr-3 h-6 w-1 bg-blue-400" />
              <Text className="text-xl font-bold text-white">Related News</Text>
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
