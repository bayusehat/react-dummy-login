import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEye} from '@fortawesome/free-solid-svg-icons';

class Login extends Component{
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Please Sign In</h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label className="text-left">
                                        <FontAwesomeIcon icon={faUser} />
                                        Username </label>
                                    <input type="email" className="form-control" placeholder="Masukan username anda"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1"> <FontAwesomeIcon icon={faKey} /> Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-success btn-sm btn-block">LOGIN ADMIN</button>
                                <button type="submit" className="btn btn-info btn-sm btn-block">Register Mahasiswa Baru</button>   
                            </form>
                        </div>
                    </div>
                    <div className="form-group">
                        <a href=""> <FontAwesomeIcon icon={faEye} /> Lupa Password?</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;