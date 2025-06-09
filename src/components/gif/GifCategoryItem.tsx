import type { Category } from '../../types/category.types';
import { GifGrid } from '.';
import { Button } from '../ui';
import { BiX } from 'react-icons/bi';

interface GifCategoryItemProps {
  category: Category;
  onRemove: () => void;
}

export const GifCategoryItem = ({
  category,
  onRemove,
}: GifCategoryItemProps) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-center gap-2">
        <Button
          label=""
          variant="danger"
          handleClick={onRemove}
          py="py-2"
          px="px-3"
          icon={BiX}
        />
        <h2 className="text-2xl md:text-3xl">{category}</h2>
      </div>

      <GifGrid category={category} />
    </div>
  );
};
