import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import { Link } from "react-router";

const TrendingCard = ({ app }) => {
    // console.log(app);

    return (
        <Link to={`/appDetails/${app?.id}`} className="w-full">
            <div className="card bg-base-300 shadow-md flex flex-row items-center p-4 gap-4 w-full max-w-md">
                {/* App Image */}
                <figure className="w-24 h-24 rounded overflow-hidden">
                    <img src={app?.thumbnail} alt={app?.name} className="object-cover bg-black w-full h-full" />
                </figure>

                {/* App Info */}
                <div className="flex flex-col justify-between flex-1">
                    {/* Name */}
                    <h2 className="text-lg font-semibold">{app?.name}</h2>

                    {/* Ratings & Downloads */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                        <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" />
                            <span>{app?.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaDownload className="text-blue-500" />
                            <span>{(app?.downloads / 1000000).toFixed(1)}M+</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingCard;
