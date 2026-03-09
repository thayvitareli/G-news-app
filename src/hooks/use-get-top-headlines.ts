import { useQuery } from "@tanstack/react-query"
import getNews, { getTopHeadlines } from "@/service/news"

export default function useGetTopHeadlinesNews() {
    return useQuery({
        queryKey: ["top-headlines"],
        queryFn: getTopHeadlines,
    })
}