import React, { use, useState } from 'react';
import { FaUser, FaImage, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Register = () => {

    const { CreatUser, setUser, updateUder, googleLogin } = use(AuthContext)
    const location = useLocation()

    const [pass, setPass] = useState("");
    const [touched, setTouched] = useState(false);

    const validations = {
        length: pass.length >= 8,
        uppercase: /[A-Z]/.test(pass),
        lowercase: /[a-z]/.test(pass),
        number: /[0-9]/.test(pass),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    };

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password);
        // console.log(CreatUser, setUser, updateUder);

        CreatUser(email, password)
            .then((res) => {
                // Signed up 
                const user = res.user;
                // console.log(user);

                updateUder({ displayName: name, photoURL: photo })
                    .then(() => {
                        // Profile updated successfully
                        setUser({ ...user, displayName: name, photoURL: photo })
                        // console.log('Profile updated successfully');
                    })
                    .catch((error) => {
                        // An error occurred
                        console.log('Error updating profile', error);
                        setUser(user)
                    })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state || '/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);

                // ..
            });
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                const loggedUser = res.user
                // console.log(loggedUser)
                setUser(loggedUser)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state || '/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert('Login failed' ,errorCode, errorMessage)
                console.log('Login failed', errorCode, errorMessage)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <Helmet>
                <title>Register</title>
                <meta name="description" content="Create a new account" />
                <link rel="canonical" href="/auth/register" />
            </Helmet>
            <div className="w-full max-w-md bg-white dark:bg-base-100 rounded-lg shadow-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center">Register your account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label" htmlFor="name">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="input input-bordered pl-10 w-full"
                                required
                                onFocus={() => setTouched(false)}
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label" htmlFor="photo">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <div className="relative">
                            <FaImage className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="url"
                                id="photo"
                                placeholder="Enter your photo URL"
                                className="input input-bordered pl-10 w-full"
                                required
                                onFocus={() => setTouched(false)}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label" htmlFor="email">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email address"
                                className="input input-bordered pl-10 w-full"
                                required
                                onFocus={() => setTouched(false)}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label" htmlFor="password">
                            <span className="label-text font-semibold">Password</span>
                        </label>

                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="input input-bordered pl-10 w-full"
                                required
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$"
                                onChange={(e) => setPass(e.target.value)}
                                onFocus={() => setTouched(true)}
                            // title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
                            />
                        </div>
                    </div>

                    {touched && (
                        <ul className="mt-2 text-sm text-red-600 space-y-1">
                            {!validations.length && <li>• At least 8 characters</li>}
                            {!validations.uppercase && <li>• At least 1 uppercase letter</li>}
                            {!validations.lowercase && <li>• At least 1 lowercase letter</li>}
                            {!validations.number && <li>• At least 1 number</li>}
                            {!validations.special && <li>• At least 1 special character</li>}
                        </ul>
                    )}


                    {/* Terms */}
                    <div className="form-control">
                        <label className="label cursor-pointer flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" required />
                            <span className="label-text text-sm">
                                Accept <span className="font-bold">Term & Conditions</span>
                            </span>
                        </label>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-neutral w-full">
                        Register
                    </button>

                    <div className="divider">OR</div>

                    <button onClick={handleGoogleLogin} className="btn btn-dash w-full flex items-center justify-center gap-2">
                        <FcGoogle size={20} />
                        Sign in with Google
                    </button>

                    <p className="text-center font-bold text-sm text-gray-500 mt-2">
                        Already have an account?{" "}
                        <Link to='/auth/login' className="text-blue-700 font-semibold hover:underline">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;