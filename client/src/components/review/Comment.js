import React, { useState, useEffect } from "react";

import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import './Comment.css';

function Post({ content, rating}){

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar />
            </div>
            <div>
                <Rating name="half-rating-read" defaultValue={parseFloat(rating)} precision={0.5} readOnly />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText mb-2">
                            <h3>
                                {/* <span className="fw-bolder">{displayName}{" "}</span> */}
                                <span className="fw-bolder">
                                <p>{content}</p>
                                </span>
                                <span className="text-muted">
                                    {"  ‧  "}
                                </span>
                            </h3>
                    </div>
                </div>
                <div>
                    Content
                    <p>{content}</p>
                    {/* {content?.split('\n').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })} */}
                </div>
            </div>
        </div>
    );
}

export default Post;