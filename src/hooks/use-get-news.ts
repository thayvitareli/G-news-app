import { useQuery } from '@tanstack/react-query';
import getNews from '@/service/news';

export default function useGetNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });
}
