import React, { useEffect } from 'react';
import SingleCard from './SingleCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../features/posts/postsSlice';

const SideCard = () => {
    const dispatch = useDispatch();
    const { posts, isLoading, isError, error } = useSelector(
        (state) => state.posts
    );

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // decide what to render
    let content;

    //  if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && posts ?.length === 0) {
        content = <div className="col-span-12">No videos found!</div>;
    }

    if (!isError && !isLoading && posts ?.length > 0) {
        content = posts.map((post) => (
            <SingleCard key={post.id} post={post} />
        ));
    }
    return (
        <main className="post-container" id="lws-postContainer">
            {/* <!-- single post --> */}

            {content}


            {/* <!-- Single Post Ends --> */}

        </main>
    );
};

export default SideCard;