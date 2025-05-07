import React, { use, useState } from 'react';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';



const Login = () => {


    const { setUser, login, googleLogin } = use(AuthContext)
    const location = useLocation()

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        // console.log(email, password)
        // Perform login logic here (e.g., API call)

        login(email, password)
            .then((res) => {
                const loggedUser = res.user
                // console.log(loggedUser)
                setUser(loggedUser)
                alert('Login successful')

                navigate(location?.state || '/')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert('Login failed' ,errorCode, errorMessage)
                setError('Invalid email or password')
                console.log('Login failed', errorCode, errorMessage)
            })

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                const loggedUser = res.user
                // console.log(loggedUser)
                setUser(loggedUser)
                alert('Login successful')
                navigate(location?.state || '/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert('Login failed' ,errorCode, errorMessage)
                setError('Invalid email or password')
                console.log('Login failed', errorCode, errorMessage)
            })
    }


    return (
        <div className="h-[95vh] bg-base-200 flex items-center justify-center p-4">
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Login to your account" />
                <link rel="canonical" href="/auth/login" />
            </Helmet>
            <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6">
                <h2 className="text-2xl font-bold text-center text-base-content mb-4">
                    Login Your Account
                </h2>

                {error && <p className='text-red-500 text-sm font-bold text-center'>{error}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            className="input w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            id='password'
                            placeholder="••••••"
                            className="input w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="cursor-pointer label justify-start gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="label-text">Remember me</span>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-neutral w-full">
                        Sign In
                    </button>
                </form>

                <div className="text-center mt-4">
                    <a href="#" className="link link-hover text-sm">
                        Forgot your password?
                    </a>
                </div>

                <div className="divider">OR</div>

                <button onClick={handleGoogleLogin} className="btn btn-dash w-full flex items-center justify-center gap-2">
                    <FcGoogle size={20} />
                    Sign in with Google
                </button>

                <p className="text-center text-sm mt-6">
                    Don't have an account?{" "}
                    <Link state={location.state} to='/auth/register' className="text-blue-700 font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;