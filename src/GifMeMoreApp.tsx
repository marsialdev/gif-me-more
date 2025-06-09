import { Header } from './components/ui';
import { GifCategoryItem, GifCategoryForm } from './components/gif';
import { useCategories } from './hooks/useCategories';
import { Toaster } from 'sonner';

export const GifMeMore = () => {
  const { categories, onAddCategory, onRemoveCategory, isEmpty } =
    useCategories();
  return (
    <>
      <div className="max-w-screen-lg min-h-screen flex flex-col justify-center mx-auto py-8 px-4 md:px-8">
        <Header>
          <GifCategoryForm onAddCategory={onAddCategory} />
        </Header>

        <main className="space-y-12 md:space-y-15">
          {isEmpty ? (
            <div className="text-center">
              <p className="inline-block p-4 rounded-xl bg-dark border border-gray-800 text-center text-white/80">
                Start by searching for a category above!
              </p>
            </div>
          ) : (
            categories.map((category) => (
              <GifCategoryItem
                key={category}
                category={category}
                onRemove={() => onRemoveCategory(category)}
              />
            ))
          )}
        </main>
      </div>
      <Toaster position="top-right" richColors />
    </>
  );
};
