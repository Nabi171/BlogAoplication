import React from 'react';
import SingleRelatedPost from './SingleRelatedPost';

const RelatedPost = ({ posts }) => {
    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                {/* <!-- related post  --> */}
                {
                    posts.slice(0, 3).map(post =>
                        <SingleRelatedPost post={post}
                            key={post.id}
                        />
                    )
                }

                {/* <!-- related post ends --> */}
            </div>
        </aside>
    );
};

export default RelatedPost;