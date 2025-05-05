import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";

const AppCard = ({ app }) => {
    return (
        <div className="card lg:card-side bg-base-200 shadow-xl border border-gray-200">
            {/* Thumbnail */}
            <figure className="w-full lg:w-1/3 p-4">
                <img src={app.thumbnail} alt={app.name} className="rounded-xl w-full h-auto object-cover" />
            </figure>

            {/* App Details */}
            <div className="card-body w-full lg:w-2/3">
                {/* Name */}
                <h2 className="card-title text-2xl font-semibold">{app.name}</h2>

                {/* Description */}
                <p className="text-base text-gray-700">
                    {app.description}
                </p>

                {/* Features */}
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                    {app.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                {/* Ratings & Downloads */}
                <div className="mt-4 flex gap-4 items-center">
                    <div className="flex items-center gap-2 text-yellow-500">
                        <FaStar />
                        <span className="font-medium text-gray-800">{app.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-500">
                        <FaDownload />
                        <span className="font-medium text-gray-800">
                            {(app.downloads / 1000000).toFixed(1)}M+
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;
