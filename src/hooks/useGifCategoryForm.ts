import { useState } from 'react';
import { getGifsLimit } from '../helpers//getGifsLimit';
import type { Category } from '../types/category.types';
import { validateCategory } from '../utils/validateCategory';
import { toast } from 'sonner';

export const useGifCategoryForm = (
  onAddCategory: (newCategory: Category) => void
): {
  inputValue: string;
  loading: boolean;
  onInputChange: (target: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
} => {
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCategory = inputValue.trim();
    const { isValid, alertMessage } = validateCategory(newCategory);

    if (!isValid) {
      toast.error(alertMessage);
      return;
    }

    try {
      setLoading(true);

      const gifs = await getGifsLimit(newCategory);
      const hasGifs = gifs.length > 0;
      if (!hasGifs) {
        toast.error('Results not found');
        setInputValue('');
        return;
      }

      onAddCategory(newCategory);
      setInputValue('');
    } catch (error) {
      console.error('Error fetching gifs:', error);
      alert('An error occurred while searching for GIFs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    inputValue,
    loading,
    onInputChange,
    onSubmit,
  };
};
