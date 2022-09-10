import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate = useNavigate();

    const {id}=useParams()

    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: "",
        job: ""
    })
    const { name, userName, email, job } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(()=> {
        loadUser()
    },[])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/")
    }

    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 border rounded p-4 mt-5 shadow">
                    <h2 className="text-center m-4">
                        Edit User
                    </h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type={"text"} className="form-control" placeholder="Enter your name" name="name" value={name} onChange={(e) => onInputChange(e)} required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">Username</label>
                            <input type={"text"} className="form-control" placeholder="Enter your Last Name" name="userName" value={userName} onChange={(e) => onInputChange(e)} required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-Mail</label>
                            <input type={"email"} className="form-control" placeholder="Enter your E-Mail" name="email" value={email} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="job" className="form-label">Job</label>
                            <input type={"text"} className="form-control" placeholder="Enter your Job" name="job" value={job} onChange={(e) => onInputChange(e)} required></input>
                        </div>
                        <button type="submit" class="btn btn-success mx-2">Sumbit</button>
                        <Link type="button" class="btn btn-danger mx-2" to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

