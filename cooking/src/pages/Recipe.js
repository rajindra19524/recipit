import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Recipe.css'

export default function Recipe() {
    const { id } = useParams()
    
    const url = 'http://localhost:3000/recipes/' + id

    const { data: recipe, error, isPending } = useFetch(url)
    
    return (
        <div className="recipe">
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p>{recipe.method}</p>
                </>
            )}
        </div>
    )
}