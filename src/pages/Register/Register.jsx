import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { imageUpload } from '../../utils/imageUploader';

const Register = () => {

    const [signupError, setSignupError] = useState("");

    const { signup, googleLogin, updateUserData } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = async (data) => {

        console.log(data)
        const image = data.img[0];
        const imageUrl = await imageUpload(image);
        const dbuser = {
            email: data.email,
            name: data.name,
            isSeller: data.isSeller,
            photoUrl: imageUrl,
            phone: data.phone
        }

        signup(data.email, data.password)
            .then(result => {
                setSignupError("");
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name,
                    photoURL: imageUrl
                }
                updateUserData(userInfo)
                    .then(async () => {
                        const dbResult = await saveUserToDB(dbuser);
                        if (dbResult.data.acknowledged) {
                            toast.success("Registered successfully")
                        }
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                setSignupError(error.message);
                toast.error(error.message)
            })

        const saveUserToDB = async (user) => {

            const res = await axios.post("http://localhost:5000/users", user);
            console.log("save to db", res);
            return res


        }

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                setSignupError("")
            })
            .catch(err => setSignupError(err.message))
    }
    return (
        <div>
            <div className="hero my-20">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-5xl mb-5'>Registration</h2>

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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"{...register("name", { required: "Name is Required", })} name='name' required placeholder="Name" className="input input-bordered" />
                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.name && errors.name?.message
                                    }
                                </span>
                            </label>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text"{...register("phone", { required: "Phone Number is Required", })} name='phone' required placeholder="Phone Number" className="input input-bordered" />
                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.name && errors.name?.message
                                    }
                                </span>
                            </label>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Must be at least 6 characters long" },
                                    pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, message: "Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character" }
                                })} placeholder="password" name='password' required className="input input-bordered" />

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
                                    <span className="label-text">Profile Picture</span>
                                </label>
                                <input required type="file" {...register("img")} placeholder="Profile Picture" name='img' className="file-input file-input-bordered " />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Account?</span>
                                </label>
                                <input type="checkbox" {...register("isSeller")} name='isSeller' className="toggle" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-red-500">
                                        {
                                            signupError && signupError
                                        }
                                    </span>
                                </label>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Register</button>
                            </div>
                        </form>

                        <div className=' text-center my-3'>
                            <p className=' divider divider-vertical'>Or</p>
                            <div className='flex justify-around items-center my-3'>
                                <button onClick={handleGoogleLogin} className="btn btn-outline w-full"> Register with <FcGoogle className='ml-2' ></FcGoogle></button>

                            </div>
                            <div>
                                Already have an account? <span className='font-extrabold text-primary'><Link to='/login'>Login</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;