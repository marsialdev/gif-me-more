import { useState, useEffect, useMemo } from 'react';
import { Category } from '../types/category.types';

export const useCategories = () => {
  const initialCategories = (): Category[] => {
    const localStorageCategories = localStorage.getItem('categories');
    return localStorageCategories ? JSON.parse(localStorageCategories) : [];
  };

  const [categories, setCategories] = useState<Category[]>(initialCategories);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const onAddCategory = (newCategory: Category): void => {
    const categoryExist = categories.findIndex(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    );
    if (categoryExist >= 0) return;
    setCategories([newCategory, ...categories]);
  };

  const onRemoveCategory = (category: Category): void => {
    setCategories((prevCategories) =>
      prevCategories.filter((categoryIterated) => categoryIterated !== category)
    );
  };

  const isEmpty = useMemo(() => categories.length <= 0, [categories]);

  return {
    categories,
    onAddCategory,
    onRemoveCategory,
    isEmpty,
  };
};
