import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, handleDeleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const list = recipes.map((recipe) => (

    <RecipeItem 
      name={recipe.name} 
      cuisine={recipe.cuisine} 
      photo={recipe.photo} 
      ingredients={recipe.ingredients} 
      preparation={recipe.preparation} 
      deleteRecipe={() => handleDeleteRecipe(recipe.name)} 
    />

  ))

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
