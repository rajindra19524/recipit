import { Link } from 'react-router-dom';
import './Navbar.css'
import Searchbar from './Searchbar';


function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/" className='brand'>
                    <h1>COOKING RP</h1>
                </Link>
                <Searchbar/>
                <Link to="/create">create recipe</Link>
            </nav>
        </div>
    )
}

export default Navbar;