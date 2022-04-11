import React from "react";

function RecipeItem({ key, name, cuisine, photo, ingredients, preparation, deleteRecipe }) {
    return (
        <tr key={key}>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td><img src={photo} width="100%" height="100%"/></td>
            <td className="content_td">{ingredients}</td>
            <td className="content_td">{preparation}</td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    )
};

export default RecipeItem;
