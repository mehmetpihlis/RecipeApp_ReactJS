import WriteFavRecipe from "./WriteFavRecipe";

function ListFavRecipe({favRecipeList}) {
    return ( <div className="ListFavRecipe">
        {favRecipeList.map((favRecipe, index) => {
            return <WriteFavRecipe 
            favRecipe= {favRecipe}
            key= {index}
            />
        })}
    </div> );
}

export default ListFavRecipe;