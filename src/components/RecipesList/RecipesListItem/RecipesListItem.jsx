import { Link } from 'react-router-dom'

export default function RecipesListItem({ recipe }) {
    return (
        <>
            <p>
                <Link to={`/recipes/${recipe._id}`}>
                    {recipe.title}
                </Link>
            </p>
        </>
    )
}