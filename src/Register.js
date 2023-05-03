import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react';
const axios = require('axios')

function Register() { 

    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [CPassword,setCPassword] = useState("");

    const register =(e)=> {
        e.preventDefault()
        axios.post('http://localhost:5000/userRegister', {
            name: name,
            email: email,
            password: Password,
        })
            .then(function (response) {
                console.log(response);
                setName('')
                setEmail('')
                setPassword('')
                setCPassword('')
                navigate('/Login')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="hold-transition register-page">
                <div className="register-box">
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <a href="#" className="h1"><img src={require('./images/watch-logo.png')} width={100} className="whitetoblack" /></a>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Register a new membership</p>
                            <form  method="post">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Full name"  value={name}  onChange={(e) =>setName(e.target.value)} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" value={email}  onChange={(e) =>setEmail(e.target.value)}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" value={Password} onChange={(e) =>setPassword(e.target.value)}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Retype password" value={CPassword} onChange={(e) =>setCPassword(e.target.value)} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree"  />
                                            <label htmlFor="agreeTerms">
                                                I agree to the <a href="#">terms</a>
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button className="btn btn-primary btn-block" onClick={register} >Register</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <div className="social-auth-links text-center">
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" />
                                    Sign up using Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" />
                                    Sign up using Google+
                                </a>
                            </div>
                            <Link to="/login" className="text-center">I already have a membership</Link>
                        </div>
                        {/* /.form-box */}
                    </div>{/* /.card */}
                </div>
                {/* /.register-box */}
            </div>
        </>
    )
}
export default Register;