import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/" className='brand'>
                    <h1>COOKING RP</h1>
                </Link>

                <Link to="/create">create recipe</Link>
            </nav>
        </div>
    )
}

export default Navbar;