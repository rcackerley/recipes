
export const setSearchResultRecipes = recipes =>
  ({
    type: setSearchResultRecipes.toString(),
    payload: recipes
  });

export const addRecipe = recipe =>
  ({
    type: addRecipe.toString(),
    payload: recipe
  });

  export const setActiveRecipe = recipeId =>
  ({
    type: setActiveRecipe.toString(),
    payload: recipeId
  });

export const updateCategories = categories =>
  ({
    type: updateCategories.toString(),
    payload: categories
  })

export const updateIngredients = ingredients =>
  ({
    type: updateIngredients.toString(),
    payload: ingredients
  })
export const setToken = token =>
  ({
    type: setToken.toString(),
    payload: token

  })

addRecipe.toString = () => 'ADD_RECIPE';
setSearchResultRecipes.toString = () => 'SET_SEARCH_RESULTS_RECIPES';
setActiveRecipe.toString = () => 'SET_ACTIVE_RECIPE';
updateCategories.toString = () => 'UPDATE_CATEGORIES';
updateIngredients.toString = () => 'UPDATE_INGREDIENTS';
setToken.toString = () => 'SET_TOKEN';
