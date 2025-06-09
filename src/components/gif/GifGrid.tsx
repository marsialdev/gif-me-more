import { memo } from 'react';
import { GifItem } from './';
import { Category } from './../../types';
import { useFetchGifs } from './../../hooks/useFetchGifs';
import { Spinner } from '../ui';

type GifGridProps = {
  category: Category;
};

export const GifGrid = memo(({ category }: GifGridProps) => {
  const { isLoading, gifs } = useFetchGifs(category);
  // console.log(gifs);
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {isLoading ? (
        <Spinner />
      ) : (
        gifs.map((gif) => <GifItem key={gif.id} gif={gif} />)
      )}
    </div>
  );
});
