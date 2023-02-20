import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faMailBulk} from '@fortawesome/free-solid-svg-icons';

function Register(){
        const navigate = useNavigate();
        const { register, formState : {errors}, handleSubmit } = useForm();
        const onSubmit = (data) => {
            fetch('http://localhost:8000/user', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(() => {
                alert('datamu berhasil disimpan! silahkan login')
                navigate("/",{replace : true});
            });
        }
          
        return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Register Mahasiswa</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faUser} />
                                        Username : </label>
                                    <input type="text" className="form-control" placeholder="Masukan username anda" {...register("username", { required: true, maxLength: 20 })} aria-invalid={errors.username ? "true" : "false"}/>
                                    {errors.username?.type === 'required' && <p role="alert" className='text-danger'>Username is required</p>}
                                </div>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faUser} />
                                        Nama : </label>
                                    <input type="text" className="form-control" placeholder="Masukan nama anda" {...register("nama", { required: true, maxLength: 20 })} aria-invalid={errors.nama ? "true" : "false"} />
                                    {errors.username?.type === 'required' && <p role="alert" className='text-danger'>Nama is required</p>}
                                </div>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faMailBulk} />
                                        Email : </label>
                                    <input type="email" className="form-control" placeholder="Masukan e-mail anda" {...register("email", { required: true, maxLength: 20 })} aria-invalid={errors.email ? "true" : "false"}/>
                                    {errors.username?.type === 'required' && <p role="alert" className='text-danger'>E-mail is required</p>}
                                </div>
                                <div className="form-group text-left">
                                    <label> <FontAwesomeIcon icon={faGear} /> Password :</label>
                                    <input type="password" className="form-control" placeholder="Masukkan password anda" {...register("password", { required: true, maxLength: 20 })} aria-invalid={errors.password ? "true" : "false"}/>
                                    {errors.username?.type === 'required' && <p role="alert" className='text-danger'>Password is required</p>}
                                </div>
                                <input type="submit" value="Register" className='btn btn-success btn-sm btn-block' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
export default Register;