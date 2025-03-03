import { create } from 'zustand';

    const useRecipeStore = create((set, get) => ({
      recipes: [],
      searchTerm: '',
      filteredRecipes: [],
      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, { ...newRecipe, id: Date.now() }],
        }), () => get().filterRecipes()), // filter after adding a recipe
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
        }), () => get().filterRecipes()), // filter after deleting
      updateRecipe: (updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
          ),
        }), () => get().filterRecipes()), // filter after updating
      setRecipes: (recipes) => set({ recipes }, () => get().filterRecipes()), // filter after setting recipes
      setSearchTerm: (term) => set({ searchTerm: term }, () => get().filterRecipes()),
      filterRecipes: () =>
        set((state) => ({
          filteredRecipes: state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          ),
        })),
    }));

    export default useRecipeStore;
