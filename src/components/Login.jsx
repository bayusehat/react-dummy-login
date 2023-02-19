import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

class Login extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <h2>Login Sistem</h2>
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
                            <div class="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>   
                        </form>
                    </div>
                </div>
            </div> 
        );
    }
}
export default Login;