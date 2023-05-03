import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
const axios = require('axios');
var data = '';

function Login() {

    const navigate = useNavigate()
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [val, setval] = useState(false);
    const sign_in = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/userLogin', {
            email: Email,
            password: password,
        }).then(function (response) {
            console.log(response.data);
            var username = response.data.name;
            var userId = response.data._id;
            localStorage.setItem('Name', username);
            localStorage.setItem('Id', userId);

            var getname = localStorage.getItem('Name');
            var getId = localStorage.getItem('Id');
            console.log(getId);
            if (getname != '') {
                // setval(true)
                navigate('/');
            }
            console.log(val);

            toast.success('Successful Login!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
            .catch(function (error) {
                toast.error('Invalid Credentials!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(error);
            });
    }


    {
        // if (val) {

        //     return (
        //         <Home />
        //     )
        // }

        // else {


            return (
                <>
                    <div className="hold-transition login-page">
                        <div className="login-box">
                            {/* /.login-logo */}
                            <div className="card card-outline card-primary">
                                <div className="card-header text-center">
                                    <a href="#" className="h1"><img src={require('./images/watch-logo.png')} width={100} className="whitetoblack" /></a>
                                </div>
                                <div className="card-body">
                                    <p className="login-box-msg">Sign in to start your session</p>
                                    <form method="post">
                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-envelope" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-lock" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="icheck-primary">
                                                    <input type="checkbox" id="remember" />
                                                    <label htmlFor="remember">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            {/* /.col */}
                                            <div className="col-4">
                                                <button type="submit" className="btn btn-primary btn-block" onClick={sign_in}>Sign In</button>
                                                <ToastContainer />
                                            </div>
                                            {/* /.col */}
                                        </div>
                                    </form>
                                    <div className="social-auth-links text-center mt-2 mb-3">
                                        <a href="#" className="btn btn-block btn-primary">
                                            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                        </a>
                                        <a href="#" className="btn btn-block btn-danger">
                                            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                        </a>
                                    </div>
                                    {/* /.social-auth-links */}
                                    <p className="mb-1">
                                        <a href="forgot-password.html">I forgot my password</a>
                                    </p>
                                    <p className="mb-0">
                                        <Link to="/register" className="text-center">Register a new membership</Link>
                                    </p>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        {/* /.login-box */}
                    </div>
                </>
            );
        // }
    }

}
export default Login;