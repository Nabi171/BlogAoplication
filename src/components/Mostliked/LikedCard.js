import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchlikes } from '../../features/tags/likesSlice';
import SingleLinkeCard from './SingleLinkeCard';

const LikedCard = () => {
    // const dispatch = useDispatch();
    // const { likes, isLoading, isError, error } = useSelector((state) => state.likes);
    // console.log(likes)
    // useEffect(() => {
    //     dispatch(fetchlikes());
    // }, [dispatch]);

    const { likes } = useSelector((state) => state.likes);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchlikes());
    }, [dispatch]);


    // decide what to render
    // let content;

    // //  if (isLoading) content = <Loading />;
    // if (!isLoading && isError)
    //     content = <div className="col-span-12">{error}</div>;

    // if (!isError && !isLoading && likes ?.length === 0) {
    //     content = <div className="col-span-12">No blog found!</div>;
    // }

    // if (!isError && !isLoading && likes ?.length > 0) {
    //     content = likes.map((like) => (
    //         <SingleLinkeCard key={like.id} like={like} />
    //     ));
    // }
    return (
        <main className="post-container" id="lws-postContainer">
            {/* <!-- single post --> */}

            {/* {content} */}


            {
                likes.map(like =>
                    <SingleLinkeCard key={like.id} like={like} />
                )
            }


            {/* <!-- Single Post Ends --> */}

        </main>
    );
};

export default LikedCard;