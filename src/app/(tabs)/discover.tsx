import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DiscoverScreen  () {
  return (
    <SafeAreaView className="flex-1 items-center bg-background-dark justify-center">
      <StatusBar style="auto" />
      <Text className="text-3xl text-white">Discover</Text>
    </SafeAreaView >
  );
}
