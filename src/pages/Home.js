import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';


export default function Home() {

  const [user, setUsers] = useState([])//list

  const { id } = useParams()

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/user/getAll")
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
  }


  return (
    <div className='container'>
      <div className='py-1'>
        <h2 className="text-center m-4">
          Users
        </h2>
        <table className="table border shadow">

          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Job</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.job}</td>
                  <td>
                    <Link type="button" class="btn btn-success mx-2" to={`/viewuser/${user.id}`} >View</Link>
                    <Link type="button" class="btn btn-outline-info mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                    <button type="button" class="btn btn-danger mx-2" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
