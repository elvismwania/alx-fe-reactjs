import React from 'react';
import useRecipeStore from '../components/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '8px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '300px',
        fontSize: '16px',
      }}
    />
  );
};

export default SearchBar;
