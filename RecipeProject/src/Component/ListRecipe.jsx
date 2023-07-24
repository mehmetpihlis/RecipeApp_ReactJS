import WriteRecipe from "./WriteRecipe";

function ListRecipe({FoodList}) {
     
    return ( <div className="ListRecipe">
        {/* For Write Recipes */}
        {FoodList.map((recipe, key) => {
            return <WriteRecipe 
            recipe= {recipe.recipe}
            key= {key}
            />
        })}
    </div> );
}

export default ListRecipe;