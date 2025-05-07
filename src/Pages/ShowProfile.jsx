import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';

const ShowProfile = () => {

    const { user } = use(AuthContext)


    return (
        <div className="h-[90vh] flex items-center justify-center bg-base-200 px-4 py-10">
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

                <Link to='/my-profile/update' className="btn btn-primary w-full">
                    Update Profile
                </Link>
            </div>
        </div>
    );
};

export default ShowProfile;