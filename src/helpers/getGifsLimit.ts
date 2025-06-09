import { Category } from '../types/category.types';
import { Gif } from '../types/gif.types';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export const getGifsLimit = async (category: Category): Promise<Gif[]> => {
  if (!API_KEY) {
    throw new Error('Missing Giphy API key in environment variables.');
  }

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=1`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  return data;
};
