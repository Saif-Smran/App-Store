import React from 'react';
import { Link } from 'react-router';
import error from '../assets/Error.jpg'; 

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
            {/* Error Image */}
            <img
                src={error} // <-- Replace this with your actual error image path
                alt="404 Not Found"
                className="w-96 mb-8"
            />

            {/* Error Text */}
            <h1 className="text-5xl font-bold text-error mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-base mb-6 max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            {/* Back to Home Button */}
            <Link to="/" className="btn btn-primary">
                Back to Home
            </Link>
        </div>
    );
};

export default Error;