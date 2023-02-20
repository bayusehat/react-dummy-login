import React from 'react';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faGear } from '@fortawesome/free-solid-svg-icons';

function LupaPassword(){
    let { userId } = useParams();
    const { register, formState : {errors}, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if(data.password !== data.conf_password){
            alert('Konfirmasi Password tidak sesuai');
        }else{
            fetch("http://localhost:8000/user/"+ userId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            }).then(() => {
            console.log('todo updated.')
            })
        }
    }
        return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"> Lupa Password ?</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faKey} />
                                        Password Sekarang : </label>
                                    <input type="password" className="form-control" placeholder='Masukkan password sekarang' {...register("password_lama", { required: true, maxLength: 20 })} aria-invalid={errors.password_lama ? "true" : "false"} />
                                    {errors.password_lama?.type === 'required' && <p role="alert" className='text-danger'>Password Lama is required</p>}
                                </div>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faGear} />
                                        Password Baru : </label>
                                    <input type="password" className="form-control" placeholder="Masukan password baru" {...register("password", { required: true, maxLength: 20 })} aria-invalid={errors.password ? "true" : "false"} />
                                    {errors.password?.type === 'required' && <p role="alert" className='text-danger'>Password Baru is required</p>}
                                </div>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faGear} />
                                        Konfirmasi Password Baru : </label>
                                    <input type="password" className="form-control" placeholder="Konfirmasi password baru" {...register("conf_password", { required: true, maxLength: 20 })} aria-invalid={errors.conf_password ? "true" : "false"}/>
                                    {errors.conf_password?.type === 'required' && <p role="alert" className='text-danger'>Konfirmasi Password is required</p>}
                                </div>
                                <button type="submit" className="btn btn-success btn-sm btn-block">Reset Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
export default LupaPassword;