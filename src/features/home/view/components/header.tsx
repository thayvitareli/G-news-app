import { Text, View } from 'react-native';
import dayjs from 'dayjs';

export const HomeHeader = () => (
  <View className="w-full flex-row items-center justify-between px-5 py-5">
    <View className="gap-2">
      <Text className="text-2xl font-bold text-primary">GNews Portal</Text>
      <Text className="text-sm text-gray-500">{dayjs().format('MMM DD, YYYY')}</Text>
    </View>
  </View>
);
