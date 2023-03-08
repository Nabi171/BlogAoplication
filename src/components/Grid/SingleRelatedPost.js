import React from 'react';

const SingleRelatedPost = ({ post }) => {
    const { id, title, description, image, likes, isSaved, createdAt, tags } = post;
    return (
        <div className="card">
            <a href="post.html">
                <img src={image} className="card-image" alt="" />
            </a>
            <div className="p-4">
                <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
                    {title}
                </a>
                <div className="mb-0 tags">
                    <span>#{tags[0]},</span> <span>#{tags[1]},</span> <span>#{tags[2]}</span>
                </div>
                <p>{createdAt}</p>
            </div>
        </div>


    );
};

export default SingleRelatedPost;