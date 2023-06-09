import { useNavigate, useParams } from "react-router-dom";
import { getRecipeRequest, deleteRecipeRequest } from "../../utilities/recipes-api";
import { useEffect, useState } from 'react';
import RecipeDetail from "../../components/RecipeDetail/RecipeDetail";
export default function RecipeDetailPage() {
    let { recipeId } = useParams();
    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        async function getRecipe() {
            const recipe = await getRecipeRequest(recipeId);
            if (recipe) {
                setRecipe(recipe)
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            } else {
                setError('No Recipe Found')
                setLoading(false)
            }
        }
        getRecipe()
    }, [])

    async function handleDelete(e) {
        const deleteResponse = await deleteRecipeRequest(recipe._id);
        if (deleteResponse.data === 'success') {
            navigate('/recipes')
        }
    }
    return (
        <>
            <h1>Recipe</h1>
            {loading ? <p>Loading....</p>
                :
                error ? <p>{error}</p>
                    :
                    <RecipeDetail recipe={recipe} handleDelete={handleDelete} setRecipe={setRecipe}></RecipeDetail>
            }
        </>
    )
}