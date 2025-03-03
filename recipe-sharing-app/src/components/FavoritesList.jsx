import React, { useMemo } from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const memoizedFavorites = useMemo(() => {
    return favorites
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean);
  }, [favorites, recipes]); // Depend on favorites and recipes

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h2>My Favorites</h2>
      {memoizedFavorites.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '5px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
