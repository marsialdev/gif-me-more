import { Category } from '../types/category.types';
import { Gif, GifFromApi } from '../types/gif.types';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export const getGifs = async (category: Category): Promise<Gif[]> => {
  if (!API_KEY) {
    throw new Error('Missing Giphy API key in environment variables.');
  }

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=15`;

  const resp = await fetch(url);
  const { data }: { data: GifFromApi[] } = await resp.json();

  const gifs: Gif[] = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.fixed_width_downsampled.url,
  }));

  return gifs;
};
