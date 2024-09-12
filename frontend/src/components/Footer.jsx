import { Link } from 'react-router-dom'

export default function Footer() {
    return (

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text">All rights reserved 2024 &copy;</p>
                    <Link className="btn btn-primary" aria-current="page" to='/'>Home</Link>
                </div>
            </div>

    )
}