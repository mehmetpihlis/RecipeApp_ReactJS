import { useState, useEffect } from "react";
import "./App.css";
import FoodSearch from "./Component/FoodSearch";
import axios from "axios";
import ListRecipe from "./Component/ListRecipe";
import ListFavRecipe from "./Component/ListFavRecipe";

function App() {
  const [foodList, setFoodList] = useState([]);
  const [favRecipeList, setFavRecipeList] = useState([]);
  const [favPageStatus, setFavPageStatus] = useState(false);

  useEffect(() => {
    GetFavRecipeList();
  }, [favRecipeList]);

  const HandleFoods = async (foodName) => {
    const result = await axios.get(
      `https://api.edamam.com/search?q=${foodName}&app_id=be3ac5e4&app_key=01ced7466ffbb1861ff615e7b7e58b56`
    );
    setFoodList(result.data.hits);
  };

  const GetFavRecipeList = async () => {
    const result = await axios.get("http://localhost:3000/FavRecipe");
    setFavRecipeList(result.data);
  };

  const SwitchFavStatus = () => {
    setFavPageStatus(false);
  };

  return favPageStatus ? (
    <div className="FavPage">
      <div className="FavPanel">
        <h1 className="FavPageTitle">Favor<span>i</span>te Rec<span>i</span>pes</h1>
        <button onClick={SwitchFavStatus} className="FavPageBtn">
          Back to Home
        </button>
      </div>
      <ListFavRecipe favRecipeList={favRecipeList} />
    </div>
  ) : (
    <div>
      <FoodSearch
        HandleFood={HandleFoods}
        setFavPageStatus={setFavPageStatus}
      />
      <ListRecipe FoodList={foodList} />
    </div>
  );
}

export default App;
