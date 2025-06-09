import { Category } from '../types/category.types';

export const validateCategory = (
  newCategory: Category
): { isValid: boolean; alertMessage: string } => {
  if (newCategory.length <= 1) {
    return { isValid: false, alertMessage: 'Try a few more words' };
  }

  if (newCategory.length >= 50) {
    const message =
      'You have exceeded the character limit. Try with fewer words.';

    return { isValid: false, alertMessage: message };
  }

  return { isValid: true, alertMessage: '' };
};
