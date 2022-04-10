import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({...initialFormData});
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({...initialFormData})
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" placeholder="Name" onChange={handleChange} value={formData.name} required/>
            </td>
            <td>
              <input id="cuisine" name="cuisine" type="text" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine} required/>
            </td>
            <td>
              <input id="Photo" name="photo" type="url" placeholder="URL" onChange={handleChange} value={formData.photo} required/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" placeholder="Ingredients" rows="4" onChange={handleChange} value={formData.ingredients} required/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" placeholder="Preparation" rows="4" onChange={handleChange} value={formData.preparation} required/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
