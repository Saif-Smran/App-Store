import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Myprofile = () => {
    const { user, updateUder, setUser } = use(AuthContext)

    // console.log(user, 'user in my profile');

    // const navigate = useNavigate();
    const [name, setName] = useState(user.displayName || '');
    const [photoURL, setPhotoURL] = useState(user.photoURL || '');

    const handleUpdate = (e) => {
        e.preventDefault();
        // Ideally you would also update this on Firebase or your backend
        updateUder({ displayName: name, photoURL })
                    .then(() => {
                        // Profile updated successfully
                        setUser({ ...user, displayName: name, photoURL })
                        console.log('Profile updated successfully');
                    })
                    .catch((error) => {
                        // An error occurred
                        console.log('Error updating profile', error);
                        setUser(user)
                    })
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-8">
            <div className="card w-full max-w-lg bg-base-100 shadow-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>

                <div className="flex justify-center mb-4">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={photoURL} alt="Profile Preview" />
                        </div>
                    </div>
                </div>

                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="form-control">
                        <label className="label font-semibold">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold">Profile Picture URL</label>
                        <input
                            type="url"
                            placeholder="Image URL"
                            className="input input-bordered w-full"
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex justify-between mt-6">
                        <button type="submit" className="btn btn-secondary w-full">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Myprofile;