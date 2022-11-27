import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [loginError, setLoginError] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { login, googleLogin } = useContext(AuthContext);

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();



    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true });
    }

    const handleSignUp = async (data) => {
        console.log(data);
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                toast.success("logged in successfully")
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });


    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginError("");
                toast.success("logged in successfully")
            })
            .catch(err => setLoginError(err.message))
    }
    return (
        <div>
            <div className="hero my-20">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-5xl mb-5'>Login</h2>

                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: "Email is Required", })} name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.email && errors.email?.message
                                    }
                                </span>
                            </label>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register("password", { required: "Password is required" })} placeholder="password" name='password' className="input input-bordered" />

                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.password && errors.password?.message
                                    }
                                </span>
                            </label>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-red-500">
                                        {
                                            loginError && loginError
                                        }
                                    </span>
                                </label>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Login</button>
                            </div>
                        </form>

                        <div className=' text-center my-3'>
                            <p className=' divider divider-vertical'>Or</p>
                            <div className='flex justify-around items-center my-3'>
                                <button onClick={handleGoogleLogin} className="btn btn-outline w-full"> Login with <FcGoogle className='ml-2' ></FcGoogle></button>

                            </div>
                            <div>
                                New to this site? <span className='font-extrabold text-primary'><Link to='/register'>Register</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;