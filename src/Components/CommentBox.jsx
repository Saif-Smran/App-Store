// CommentBox.jsx
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const CommentBox = ({comment}) => {
    const [commen, setCommen] = useState("");
    const [value, setValue] = useState(2);
    // console.log(comment);
    

    const { user } = use(AuthContext)

    const handleSubmit = () => {
        if (commen.trim()) {
            console.log("Submitted commen:", commen, "Rating:", value, 'Name:', user?.displayName);
            setValue(2); // Reset rating to default value (2 in this case)
            setCommen("");
        }
    };

    return (
        <div className="my-10 mx-auto p-6 rounded-xl  space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Leave a Comment</h2>
            <textarea
                className="textarea textarea-bordered w-full h-32 resize-none focus:outline-none focus:ring focus:ring-primary"
                placeholder="Write your thoughts here..."
                value={commen}
                onChange={(e) => setCommen(e.target.value)}
            />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Typography component="legend">Ratinge </Typography>
                    <Rating
                        name="simple-uncontrolled"
                        onChange={(event, newValue) => {
                            // console.log(newValue);
                            setValue(newValue);
                        }}
                        defaultValue={2}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className={`btn btn-primary flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed ${comment ? "" : "btn-disabled"}`}
                    
                >
                    <FaPaperPlane /> Submit
                </button>
            </div>
        </div>
    );
};

export default CommentBox;
