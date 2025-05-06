import React from "react";
import { FaStar, FaRegStar, FaReply } from "react-icons/fa";

const ReviewCard = ({ ReviewObj }) => {

    const { review, userImg, name, date} = ReviewObj
    console.log(ReviewObj);
    

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <FaStar key={i} size={20} className="text-yellow-400" />
                ) : (
                    <FaRegStar key={i} size={20} className="text-gray-400" />
                )
            );
        }
        return stars;
    };

    return (
        <div className=" mx-auto bg-base-300 rounded-lg p-5 mb-5 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-4">
                <img
                    src={userImg}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover border"
                />
                <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-800">{name}</span>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">{renderStars(review.rating)}</div>

            {/* Comment */}
            <p className="text-gray-700">{review.comment}</p>

            {/* Reply Button */}
            <div className="text-right">
                <button className="btn btn-outline btn-sm flex items-center gap-2">
                    <FaReply /> Reply
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;
