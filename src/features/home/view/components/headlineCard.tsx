import { Text, View } from "react-native";
import { Article } from "@/types";
import { ImageBackground } from "expo-image";

const formatTimeAgo = (dateString: string) => {
  if (!dateString) return "15 min atrás";
  const date = new Date(dateString);
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) return `${Math.max(1, diffInMinutes)} min atrás`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} h atrás`;
  return `${Math.floor(diffInHours / 24)} d atrás`;
};

export default function HeadlineCard({ article }: { article: Article }) {
    return (
        <View className="h-[360px] w-[300px] rounded-xl overflow-hidden mr-4">
            <ImageBackground 
                source={{uri: article.urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=300&h=360&fit=crop"}} 
                style={{ flex: 1 }}
                contentFit="cover"
            >
                <View className="absolute inset-0 bg-black/20" />
                <View className="absolute bottom-0 w-full h-[100%] bg-black/10" style={{ shadowColor: "#000", shadowOffset: { width: 0, height: -20 }, shadowOpacity: 0.8, shadowRadius: 30 }} />

                <View className="flex-1 justify-end p-5">
                    

                    <Text className="text-[#E1E1E1] font-bold text-xl mb-3 leading-6" numberOfLines={4}>
                        {article.title}
                    </Text>

                    <View className="bg-[#00E5FF] self-start px-2.5 py-1 rounded mb-3">
                        <Text className="text-[#121212] font-semibold tracking-widest text-[10px] uppercase">
                        {article.source.name} • {formatTimeAgo(article.publishedAt)}
                        </Text>
                    </View>
                   
                </View>
            </ImageBackground>
        </View>
    )
}