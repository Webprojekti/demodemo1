import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user, setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const{id}=useParams();
    useEffect (()=>{
        loadUser();
    },[])

    const loadUser=async ()=> {
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-3 mt-4 shadow'>
            <h2 className='text-center'>Käyttäjätiedot käyttäjältä : {user.id}</h2>
            <div className='card'>
                <div className='card-header'>
                    Tiedot käyttäjältä
                    <ul className='list-group list-group-flush'>
                        <li className="list-group-item">
                            <b>Nimi:</b>
                            {user.name}
                        </li>
                        <li className="list-group-item">
                            <b>Käyttäjänimi:</b>
                            {user.username}
                        </li>
                        <li className="list-group-item">
                            <b>Sähköpostiosoite:</b>
                            {user.email}
                        </li>
                    </ul>
                </div>
            </div>
            <Link className='btn btn-primary my-2' to={"/"}>Etusivulle</Link>
            </div>
            </div>
            </div>
  )
}
