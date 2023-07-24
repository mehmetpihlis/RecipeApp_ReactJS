import WriteIngredient from "./WriteIngredient";
import axios from "axios";

function WriteFavRecipe({ favRecipe }) {

    const DeleteFavorite = () => {
        let result = window.confirm("Are you sure you want to delete your Favorit recipe?");
        if(result) {
            axios.delete(`http://localhost:3000/FavRecipe/${favRecipe.id}`);
        }
    }

  return (
    <div className="WriteFavRecipe">
      <img src={favRecipe.image} alt="FavRecipeImage" />
      <br />
      <h1><i class="fa-solid fa-star"></i>{favRecipe.label}<i class="fa-solid fa-star"></i></h1>
      <p>
        Kitchen: <strong>{favRecipe.cuisineType}</strong>
      </p>
      <p>
        Food Type: <strong>{favRecipe.dishType}</strong>
      </p>
      <p>
        Times: <strong>{favRecipe.mealType}</strong>
      </p>
      <p>
        Calorie:{" "}
        <strong>
          {favRecipe.calories} <b>cal</b>
        </strong>
      </p>
      <br />
      <br />

      <div className="materials">
        <h2>Ingredients</h2>
        <ul>
          {/* For Write Ingredients */}
          {favRecipe.Ingredients.map((ingredient, index) => {
            return <WriteIngredient ingredient={ingredient} key={index} />;
          })}
        </ul>
      </div>
      <br />
      <br />

      <a className="FavExtraBtn" href={favRecipe.detailedRecipe} target="_blank">
        <strong>Detailed Recipe</strong>
      </a>

      <a className="FavExtraBtn" href={favRecipe.detailedInformation} target="_blank">
        <strong>Detailed Information</strong>
      </a>

      <button onClick={DeleteFavorite} className="DeleteFavoriteBtn">
        <strong>Delete Favorite</strong>
      </button>
    </div>
  );
}

export default WriteFavRecipe;
