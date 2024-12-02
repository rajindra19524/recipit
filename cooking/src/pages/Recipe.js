import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Recipe.css'

export default function Recipe() {
    const { id } = useParams()
    
    const url = 'http://localhost:3000/recipes/' + id

    const { data: recipe, error, isPending } = useFetch(url)
    
    return (
        <div>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && <h1>{recipe.title}</h1>}
        </div>
    )
}