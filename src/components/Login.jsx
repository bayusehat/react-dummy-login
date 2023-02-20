import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faEye} from '@fortawesome/free-solid-svg-icons';

function Login(){
    const navigate = useNavigate();
    const {register, formState: { errors }, handleSubmit } = useForm();
    const [auth,setAuth] = useState(localStorage.getItem("authenticated") || false);
    const onSubmit = (myJson) => {
        fetch("http://localhost:8000/user")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const user = data.find(row => { return row.username === myJson.username && row.password === myJson.password});
            if(user){
                setAuth(true)
                localStorage.setItem('authenticated',true);
                localStorage.setItem('username',user.username);
                localStorage.setItem('id',user.id);
                alert('Login berhasil');
                navigate("/dashboard",{ replace: true });
            }else{
                alert('Data tidak ditemukan')
            }
        })
        .catch((err) => {
            if (err.name === "AbortError") {
            console.log("fetch aborted.");
            }
        });
    }

    useEffect(() => {
      const stillLogged = auth;
      if(stillLogged){
        navigate("/dashboard",{replace:true});
      }
    }, []);
    
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Login</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group text-left">
                                        <label>
                                            <FontAwesomeIcon icon={faUser} />
                                            Username : </label>
                                        <input type="text" className="form-control" placeholder="Masukan username anda" {...register("username", { required: true, maxLength: 20 })} aria-invalid={errors.username ? "true" : "false"} />
                                        {errors.username?.type === 'required' && <p role="alert" className='text-danger'>Username is required</p>}

                                    </div>
                                    <div className="form-group text-left">
                                        <label htmlFor="exampleInputPassword1"> <FontAwesomeIcon icon={faGear} /> Password : </label>
                                        <input type="password" className="form-control" placeholder="Password" {...register("password", { required: true, maxLength: 20 })} aria-invalid={errors.password ? "true" : "false"}/>
                                        {errors.password?.type === 'required' && <p role="alert" className='text-danger'>Password is required</p>}
                                    </div>
                                    <input type="submit" className="btn btn-success btn-sm btn-block" value="LOGIN ADMIN" />
                                    <a href={`register`} className="btn btn-info btn-sm btn-block"> Register Mahasiswa Baru</a>
                                </form>
                            </div>
                        </div>
                        <div className="form-group">
                            <a href={`lupapassword`}> <FontAwesomeIcon icon={faEye} /> Lupa Password?</a>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
export default Login;