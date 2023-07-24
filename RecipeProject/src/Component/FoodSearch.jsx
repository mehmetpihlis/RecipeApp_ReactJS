import { useState } from "react";

function FoodSearch( {HandleFood, setFavPageStatus} ) {

    const [foodName, setFoodName] = useState("");

    const ChangeFoodName = (event) => {
        setFoodName(event.target.value);
    }

    const HandleFoodName = (event) => {
        event.preventDefault();
        HandleFood(foodName);
    }

    const SwitchFavStatus = () => {
        setFavPageStatus(true);
    }

    return ( <div className="FoodSearch">
        <div className="FoodSearch-Group">
            <h1>PHLS Recipe</h1>
            <form>
                <label>Food Name</label>
                <input onChange={ChangeFoodName} value={foodName}/>
                <input onClick={HandleFoodName} type="submit" value="Search"/>
                <input onClick={SwitchFavStatus} type="button" value="Favorites" className="SwitchFavPage" />
            </form>
        </div>
    </div> );
}

export default FoodSearch;