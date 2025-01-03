import { useLocation } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Search.css'
import RecipeList from '../components/RecipeList'

export default function Search() {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/recipes?q='+query
    
    const {isPending,error,data} = useFetch(url)

    return (
        <div>
            <h2 className='page-title'>Recipes including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}