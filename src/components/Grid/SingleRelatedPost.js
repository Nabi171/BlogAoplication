import React from 'react';
import { Link } from 'react-router-dom';

const SingleRelatedPost = ({ post }) => {
    const { id, title, description, image, likes, isSaved, createdAt, tags } = post;
    return (
        <div className="card">
            <Link to={`/blogs/${id}`} >
                <img src={image} className="card-image" alt="" />
            </Link>
            <div className="p-4">
                <Link to={`/blogs/${id}`} className="text-lg post-title lws-RelatedPostTitle">
                    {title}
                </Link>
                <div className="mb-0 tags">
                    <span>#{tags[0]},</span> <span>#{tags[1]},</span> <span>#{tags[2]}</span>
                </div>
                <p>{createdAt}</p>
            </div>
        </div>


    );
};

export default SingleRelatedPost;