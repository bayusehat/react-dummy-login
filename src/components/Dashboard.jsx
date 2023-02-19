import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

function Dashboard(){
    const [auth,setAuth] = useState(null);
    useEffect(() => {
            const isLogged = localStorage.getItem("authenticated");
            if (isLogged) {
            setAuth(isLogged);
            }
          }, []);
        if(!auth){
             return <Navigate replace to="/" />;
        }else{
            return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div>Welcome to dashboard</div>
                    </div>
                </div>
            </div>
            );
        }
    }
export default Dashboard;