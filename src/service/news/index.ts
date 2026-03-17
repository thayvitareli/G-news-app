import axios, { isAxiosError } from 'axios';
import { NewsResponse } from '@/types';

export default async function getNews(): Promise<NewsResponse | undefined> {
  try {
    const response = await axios.get<NewsResponse>(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.EXPO_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(isAxiosError(error) ? error?.response?.data : error);
  }
}

export async function getTopHeadlines() {
  try {
    const response = await axios.get<NewsResponse>(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.EXPO_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log('getTopHeadlines error', isAxiosError(error) ? error?.response?.data : error);
  }
}

export async function getDiscoverNews(category: string, query: string = '') {
  try {
    const response = await axios.get<NewsResponse>(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}${
        query ? `&q=${query}` : ''
      }&apiKey=${process.env.EXPO_PUBLIC_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log('getDiscoverNews error', isAxiosError(error) ? error?.response?.data : error);
  }
}
