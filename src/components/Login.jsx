import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faEye} from '@fortawesome/free-solid-svg-icons';

class Login extends Component{
    render(){
        return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Login</h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faUser} />
                                        Username : </label>
                                    <input type="email" className="form-control" placeholder="Masukan username anda"  required/>
                                </div>
                                <div className="form-group text-left">
                                    <label for="exampleInputPassword1"> <FontAwesomeIcon icon={faGear} /> Password : </label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-success btn-sm btn-block">LOGIN ADMIN</button>
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
}
export default Login;