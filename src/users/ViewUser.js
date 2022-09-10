import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {
    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: "",
        job: ""
    })

    const { id } = useParams()

    useEffect(() => {
        loadUser();
    }, [])
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 border rounded p-4 mt-5 shadow">
                    <h2 className="text-center m-4">
                        User Details
                    </h2>
                    <div className="card">
                        <div className="card-header">
                            Details of User id : {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>
                                        Name :
                                    </b>
                                    {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>
                                        Last Name :
                                    </b>
                                    {user.userName}
                                </li>
                                <li className="list-group-item">
                                    <b>
                                        E-Mail :
                                    </b>
                                    {user.email}
                                </li>
                                <li className="list-group-item">
                                    <b>
                                        Job :
                                    </b>
                                    {user.job}
                                </li>


                            </ul>
                        </div>

                    </div>
                    <Link type="button" class="btn btn-info my-2" to="/">Home</Link>
                </div>
            </div>
        </div>
    )
}
