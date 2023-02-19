import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faMailBulk} from '@fortawesome/free-solid-svg-icons';

function Register(){
        const [username,setUsername] = useState("");
        const [nama,setNama] = useState("");
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const addMahasiswa = () => {
            const newMahasiswa = {username,nama,email,password }
            fetch('http://localhost:8000/user', {
                      method: 'POST',
                      headers: {
                          "Content-Type": "application/json"
                      },
                      body: JSON.stringify(newMahasiswa)
                  }).then(() => {
                      alert('datamu berhasil disimpan!')
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
                            <form>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faUser} />
                                        Username : </label>
                                    <input type="text" className="form-control" placeholder="Masukan username anda" value={username} onChange={(e) => setUsername(e.target.value)}  required/>
                                </div>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faUser} />
                                        Nama : </label>
                                    <input type="text" className="form-control" placeholder="Masukan nama anda" value={nama} onChange={(e) => setNama(e.target.value)} required/>
                                </div>
                                <div className="form-group text-left">
                                    <label>
                                        <FontAwesomeIcon icon={faMailBulk} />
                                        Email : </label>
                                    <input type="email" className="form-control" placeholder="Masukan e-mail anda" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                                <div className="form-group text-left">
                                    <label> <FontAwesomeIcon icon={faGear} /> Password :</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-success btn-sm btn-block" onClick={addMahasiswa}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
export default Register;