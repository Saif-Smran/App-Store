import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const ShowProfile = () => {

    const { user } = use(AuthContext)


    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
            <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 text-center space-y-6">

                <div className="avatar justify-center">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} alt="Profile" />
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-lg font-bold">{user.displayName}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <button className="btn btn-primary w-full">
                    Action Button
                </button>
            </div>
        </div>
    );
};

export default ShowProfile;