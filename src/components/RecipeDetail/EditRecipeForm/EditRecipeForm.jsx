import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateRecipeRequest } from '../../../utilities/recipes-api';

export default function EditRecipeForm({ recipe, setRecipe, setEditFormIsOpen }) {
    const navigate = useNavigate();
    const titleRef = useRef(recipe.title)
    const servingsRef = useRef(recipe.servings)
    const mealRef = useRef(recipe.meal)
    const favoriteRef = useRef(recipe.favorite)
    const descriptionRef = useRef(recipe.description)
    const ingredientsRef = useRef(recipe.ingredients)
    const instructionsRef = useRef(recipe.instructions)
    const [error, setError] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        const updatedRecipe = {
            title: titleRef.current.value,
            servings: servingsRef.current.value,
            meal: mealRef.current.value,
            favorite: favoriteRef.current.checked,
            description: descriptionRef.current.value,
            ingredients: ingredientsRef.current.value,
            instructions: instructionsRef.current.value
        }
        try {
            const newRecipe = await updateRecipeRequest(recipe._id, updatedRecipe)
            setRecipe(newRecipe)
            setEditFormIsOpen(false)
        } catch (err) {
            setError("Bad Update, Man")
        }
    }
    return (
        <>
            <h3>Edit Recipe</h3>
            {error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} defaultValue={recipe.title} />
                <label htmlFor="servings">Servings</label>
                <input type="number" id="servings" ref={servingsRef} defaultValue={recipe.servings} />
                <label htmlFor="meal">Meal</label>
                <select name="meal" id="meal" ref={mealRef} defaultValue={recipe.meal}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Brunch">Brunch</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                    <option value="Second Breakfast">Second Breakfast</option>
                </select>
                <label htmlFor="favorite">Favorite?</label>
                <input type="checkbox" id="favorite" defaultChecked={recipe.favorite} ref={favoriteRef} />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef} defaultValue={recipe.description} />
                <label htmlFor="ingredients">Ingredients</label>
                <input type="text" id="ingredients" ref={ingredientsRef} defaultValue={recipe.ingredients} />
                <label htmlFor="instructions">Instructions</label>
                <input type="text" id="instructions" ref={instructionsRef} defaultValue={recipe.instructions} />
                <button>Edit the Recipe</button>
            </form>
        </>
    )
}