import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'



export default function Header() {
    const [access, setAccess] = useState(localStorage.getItem('access') || '');

    useEffect(() => {
        const handleStorageChange = () => {
            setAccess(localStorage.getItem('access'));
        };

        // Listen for storage changes
        window.addEventListener('storage', handleStorageChange);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    console.log(access);


    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {(access) ? 
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </> : 
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                            } 
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}