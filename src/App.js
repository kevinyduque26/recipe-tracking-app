import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const [recipes, setRecipes] = useState(RecipeData);
  const addRecipe = (newRecipe) => setRecipes([...recipes, newRecipe]);

  console.log(recipes)

  const handleDeleteRecipe = (name) =>
    setRecipes((currentRecipes) => 
      currentRecipes.filter((recipe) => recipe.name !== name)
    );

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDeleteRecipe={handleDeleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
