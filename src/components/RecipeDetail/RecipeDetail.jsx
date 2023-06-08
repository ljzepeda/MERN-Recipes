import { useState } from 'react'
import EditRecipeForm from './EditRecipeForm/EditRecipeForm'
export default function RecipeDetail({ recipe, handleDelete, setRecipe }) {
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm() {
        setEditFormIsOpen((prevState) => {
            return !prevState
        }
        )
    }
    return (
        <>
            <div>
                <h3>{recipe.title}</h3>
                <p>Servings: {recipe.servings}</p>
                <p>Cuisine: {recipe.cuisine}</p>
                {recipe.favorite && <p>Favorite</p>}
                <button onClick={handleDelete}>DELETE {recipe.title}</button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                {editFormIsOpen &&
                    <EditRecipeForm recipe={recipe} setRecipe={setRecipe} setEditFormIsOpen={setEditFormIsOpen}></EditRecipeForm>
                }
            </div>
        </>
    )
}