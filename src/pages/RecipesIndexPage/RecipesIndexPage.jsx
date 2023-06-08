import { recipesIndexRequest } from '../../utilities/recipes-api';
import { useEffect, useState } from 'react'
import RecipesList from '../../components/RecipesList/RecipesList';

export default function RecipesIndexPage() {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        console.log('loading...')
        async function getRecipes() {
            const recipes = await recipesIndexRequest();
            setRecipes(recipes)
        }
        getRecipes();
    }, [])
    return (
        <>
            <h1>Here are your favorite recipes</h1>
            <RecipesList recipes={recipes}></RecipesList>
        </>
    )
}