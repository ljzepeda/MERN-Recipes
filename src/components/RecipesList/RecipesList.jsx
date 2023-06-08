import RecipesListItem from './RecipesListItem/RecipesListItem'

export default function RecipesList({ recipes }) {
    const recipesComponents = recipes.map(recipe => <RecipesListItem key={recipe._id} recipe={recipe}></RecipesListItem>)
    return (
        <>
            {recipesComponents}
        </>
    )
}