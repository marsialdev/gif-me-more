import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { Gif } from '../types/gif.types';
import { Category } from '../types/category.types';

export const useFetchGifs = (
  category: Category
): { gifs: Gif[]; isLoading: boolean } => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifItems = async () => {
    const gifItems = await getGifs(category);
    setGifs(gifItems);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifItems();
  }, []);

  return {
    isLoading,
    gifs,
  };
};
