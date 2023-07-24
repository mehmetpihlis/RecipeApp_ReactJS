import WriteIngredient from "./WriteIngredient";
import axios from "axios";

function WriteRecipe({ recipe }) {
  const AddFavorite = async () => {
    await axios.post("http://localhost:3000/FavRecipe", {
      image: recipe.image,
      label: recipe.label,
      cuisineType: recipe.cuisineType[0],
      dishType: recipe.dishType[0],
      mealType: recipe.mealType[0],
      calories: recipe.calories,
      Ingredients: recipe.ingredientLines,
      detailedRecipe: recipe.url,
      detailedInformation: recipe.shareAs,
    });
    alert("This recipe has been added to your favorites");
  };

  return (
    <div className="WriteRecipe">
      <img src={recipe.image} alt="FoodImage" />
      <br />
      <h1>{recipe.label}</h1>
      <p>
        Kitchen: <strong>{recipe.cuisineType[0]}</strong>
      </p>
      <p>
        Food Type: <strong>{recipe.dishType[0]}</strong>
      </p>
      <p>
        Times: <strong>{recipe.mealType[0]}</strong>
      </p>
      <p>
        Calorie:{" "}
        <strong>
          {recipe.calories} <b>cal</b>
        </strong>
      </p>
      <br />
      <br />
      <div className="materials">
        <h2>Ingredients</h2>
        <ul>
          {/* For Write Ingredients */}
          {recipe.ingredientLines.map((ingredient, index) => {
            return <WriteIngredient ingredient={ingredient} key={index} />;
          })}
        </ul>
      </div>
      <br />
      <br />

      <a href={recipe.url} target="_blank">
        <strong>Detailed Recipe</strong>
      </a>

      <a href={recipe.shareAs} target="_blank">
        <strong>Detailed Information</strong>
      </a>

      <button onClick={AddFavorite} className="AddFavoriteBtn">
        <strong>Add Favorite</strong>
      </button>
    </div>
  );
}

export default WriteRecipe;
