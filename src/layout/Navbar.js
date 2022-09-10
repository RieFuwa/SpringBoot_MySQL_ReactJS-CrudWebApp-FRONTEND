import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark font-monospace">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">CRUD Application</Link>
                    <Link type="button" class="btn btn-light" to="/adduser">Register User</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   
                </div>
            </nav>
        </div>
    )
}
