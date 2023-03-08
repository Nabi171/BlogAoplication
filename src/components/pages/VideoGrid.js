import React, { useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import GoHome from '../Option/GoHome';
import DetailPost from '../Grid/DetailPost';
import RelatedPost from '../Grid/RelatedPost';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../../features/post/postSlice';

const VideoGrid = () => {
    const { post, isLoading, isError, error } = useSelector(
        (state) => state.post
    );
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchPost(id));
    }, [dispatch, id]);


    let content = null;
    //  if (isLoading) content = <Loading />;

    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isLoading && !isError && !post ?.id) {
        content = <div className="col-span-12">No blog found!</div>;
    }
    if (!isLoading && !isError && post ?.id) {
        content = (
            <div>
                <GoHome />
                <section className="post-page-container">
                    {/* <!-- detailed post  --> */}
                    <DetailPost post={post} />
                    {/* <!-- detailed post ends --> */}
                    {/* <!-- related posts --> */}
                    <RelatedPost />
                    {/* <!-- related posts ends --> */}
                </section>
            </div>
        );
    }

    return (
        <div>
            {/* <!-- navbar start  --> */}
            {/* <NavBar /> */}
            {/* <!-- navbar end  --> */}
            {/* <!-- Go Home / Go Back --> */}
            {content}
        </div>
    );
};

export default VideoGrid;