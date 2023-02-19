import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function LupaPassword(){
        return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"> Lupa Password ?</h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faUser} />
                                        Email : </label>
                                    <input type="enail" className="form-control" placeholder="Masukan E-mail anda"  required/>
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