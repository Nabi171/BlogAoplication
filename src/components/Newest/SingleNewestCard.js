import React from 'react';
import { Link } from 'react-router-dom';

const SingleNewestCard = ({ newPost }) => {
    const { id, title, description, image, likes, isSaved, createdAt, tags } = newPost;
    return (
        <div className="lws-card">
            <Link to={`/blogs/${id}`} >
                <img src={image} className="lws-card-image" alt="" />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <Link to={`/blogs/${id}`}> className="lws-postTitle"> {title} </Link>
                <div className="lws-tags"><span>#{tags[0]},</span> <span>#{tags[1]}</span> <span>#{tags[2]}</span></div>
                {/* <!-- Show this element if post is saved --> */}
                <div className="flex gap-2 mt-4">
                    <span className="lws-badge"> Saved </span>
                </div>
                {/* <!-- Show this element if post is saved Ends --> */}
            </div>
        </div>
    );
};

export default SingleNewestCard;