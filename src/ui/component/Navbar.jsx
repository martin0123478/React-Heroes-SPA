import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useContext } from 'react';


export const Navbar = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)
    const onLogout = () => {
        logout()
        navigate('/login', {
            replace: true
        })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        Logout
                    </button>
                    <button className='nav-item nav-link btn'>
                        {user?.name}
                    </button>


                </ul>

            </div>
        </nav>
    )
}
