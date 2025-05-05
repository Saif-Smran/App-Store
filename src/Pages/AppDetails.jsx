import React, { useState } from 'react';
import { FaDownload, FaStar } from "react-icons/fa";
import { RiUninstallLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {

    const [install, setInstall] = useState(false)
    // const [comment, setComment] = useState(false)
    const { id } = useParams()
    const data = useLoaderData()
    const app = data.find(app => app.id === id)


    const handleInstall = () => {
        setInstall(!install)
        // if (setComment === false){
        //     setComment(true)
        // }
    }

    return (
        <div className="w-11/12 mx-auto bg-base-100 rounded-xl overflow-hidden ">
            {/* Banner Image */}
            <figure>
                <img src={app.banner} alt={`${app.name} banner`} className="w-full h-[70vh] object-cover bg-black" />
            </figure>

            {/* App Info */}
            <div className="p-5">
                {/* App Name & Developer */}
                <div className="mb-2">
                    <h2 className="text-2xl font-bold">{app.name}</h2>
                    <p className="text-sm text-gray-500">by {app.developer}</p>
                </div>

                {/* Category */}
                <p className="badge badge-outline badge-info mb-2">{app.category}</p>

                {/* Description */}
                <p className="text-gray-700 mb-4">{app.description}</p>

                {/* Features */}
                <div className="mb-4">
                    <h3 className="font-semibold">Features:</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                        {app.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Rating & Downloads */}
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span>{app.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaDownload />
                        <span>{(app.downloads / 1000000).toFixed(1)}M+ downloads</span>
                    </div>
                    <div></div>
                </div>

                {/* Install Button */}
                <button
                    onClick={handleInstall}
                    className="btn btn-success text-white text-center flex items-center gap-2"
                >
                    {install ? (
                        <>
                            <RiUninstallLine />
                            Uninstall
                        </>
                    ) : (
                        <>
                            <FaDownload />
                            Install
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default AppDetails;