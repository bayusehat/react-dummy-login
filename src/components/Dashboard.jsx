import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Dashboard(){
    const [auth,setAuth] = useState(localStorage.getItem("authenticated"));
    const [username,setUsername] = localStorage.getItem("username");
    useEffect(() => {
            const isLogged = localStorage.getItem("authenticated");
            if (isLogged) {
            setAuth(isLogged);
            }
          }, []);
    const logout = () =>{
        setAuth(null);
        localStorage.removeItem("authenticated");
    }
        if(!auth){
             return <Navigate replace to="/" />;
        }else{
            return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div>Welcome! {username} </div>
                        <button type="button" className="btn btn-sm btn-danger" onClick={logout}><FontAwesomeIcon icon={ faTimes } /> LogOut</button>
                    </div>
                </div>
            </div>
            );
        }
    }
export default Dashboard;