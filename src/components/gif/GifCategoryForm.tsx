import { Category } from './../../types/category.types';
import { Button } from '../ui';
import { useGifCategoryForm } from '../../hooks/useGifCategoryForm';

type GifCategoryFormProps = {
  onAddCategory: (newCategory: Category) => void;
};

export const GifCategoryForm = ({ onAddCategory }: GifCategoryFormProps) => {
  const { inputValue, onInputChange, onSubmit, loading } =
    useGifCategoryForm(onAddCategory);

  return (
    <form onSubmit={onSubmit} className="w-full lg:max-w-screen-sm lg:mx-auto">
      <div className="flex justify-between items-center gap-1">
        <div className="grow">
          <input
            type="text"
            className="w-full py-2 px-3 rounded-lg bg-amber-50 text-stone-950"
            placeholder="Search Gifs"
            onChange={onInputChange}
            value={inputValue}
            aria-label="Search GIFs"
            id="search-input"
          />
        </div>
        <div className="">
          <Button
            variant="success"
            label={loading ? 'Searching...' : 'Search'}
            handleClick={() => onSubmit}
            disabled={loading}
          />
        </div>
      </div>
      <div className="">
        <label htmlFor="search-input" className="text-xs text-gray-400">
          Hint: try adding 'stickers' at the end of your search
        </label>
      </div>
    </form>
  );
};
