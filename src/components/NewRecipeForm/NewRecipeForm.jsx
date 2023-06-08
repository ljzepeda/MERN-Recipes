import { useRef, useState } from 'react';
import { createRecipeRequest } from '../../utilities/recipes-api';
import { useNavigate, useParams } from "react-router-dom";

export default function NewRecipeForm() {
    const navigate = useNavigate();
    const titleRef = useRef('')
    const servingsRef = useRef('')
    const cuisineRef = useRef('')
    const favoriteRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        const newRecipe = {
            title: titleRef.current.value,
            servings: servingsRef.current.value,
            cuisine: cuisineRef.current.value,
            favorite: favoriteRef.current.checked
        }
        try {
            const newRecipeResponse = await createRecipeRequest(newRecipe)
            navigate('/recipes')
        } catch (err) {
            setError(err)
        }

    }
    return (
        <>
            {error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
                <label htmlFor="servings">Servings</label>
                <input type="number" id="servings" ref={servingsRef} />
                <label htmlFor="cuisine">Cuisine</label>
                <select name="cuisine" id="cuisine" ref={cuisineRef}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Brunch">Brunch</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                    <option value="Second Breakfast">Second Breakfast</option>
                </select>
                <label htmlFor="favorite">Favorite?</label>
                <input type="checkbox" id="favorite" ref={favoriteRef} />
                <button>Create the Recipe</button>
            </form>
        </>

    )
}