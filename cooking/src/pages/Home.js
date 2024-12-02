import './Home.css'
import { useFetch } from '../hooks/useFetch';
import RecipeList from '../components/RecipeList';

function Home() {
     const {data,isPending,error} = useFetch('http://localhost:3000/recipes')
    return (
        <div className='home'>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">is Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Home;