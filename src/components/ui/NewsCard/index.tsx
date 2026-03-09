import {  Text, View } from "react-native";
import { Article } from "@/types";
import { Image } from "expo-image";

export default function NewsCard({ article }: { article: Article }) {
    return (
        <View className="flex-row items-center mb-1 border-b border-slate-500 pb-2 gap-2">
            <View className="w-[70%]">
                <Text className="text-white font-bold mb-1 text-lg">{article.title}</Text>
                <Text numberOfLines={2} className="text-slate-500">{article.description}</Text>
            </View>
            {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={{ width: 100, height: 100, borderRadius: 10, objectFit: "cover" }} />}
        </View>
    )
}