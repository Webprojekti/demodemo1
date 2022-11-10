import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterUser() {

    let navigate=useNavigate()

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const{name,username,email}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/");

    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-3 mt-4 shadow'>
                    <h2 className='text-center'>Rekisteröidy</h2>

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
