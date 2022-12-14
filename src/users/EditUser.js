import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate()

    const {id}=useParams()

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const{name,username,email}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    };

    useEffect(()=> {
    loadUser();
}, []);

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/");

    };

    const loadUser =async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-3 mt-4 shadow'>
                    <h2 className='text-center'>Muokkaa tietoja</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>
                            Nimi
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Syötä nimesi'
                            name="name"
                            value={name}
                            onChange={(e)=>onInputChange(e)}

                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Username' className='form-label'>
                            Käyttäjänimi
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Syötä käyttäjänimesi'
                            name="username"
                            value={username}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>
                            Sähköpostiosoite
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Syötä sähköpostiosoitteesi'
                            name="email"
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Hyväksy</button>
                    <Link className='btn btn-outline-danger mx-2'to="/">Palaa</Link>
                    </form>
                </div>             
            </div>
        </div>
    )
}
