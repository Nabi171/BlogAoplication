import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchnewPosts } from '../../features/newest/newPostsSlice';
import SingleNewestCard from './SingleNewestCard';

const NewestCard = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const dispatch = useDispatch()
    const { newPosts } = useSelector((state) => state.newPosts);
    console.log(newPosts)
    useEffect(() => {
        dispatch(fetchnewPosts());
    }, [dispatch]);
    return (
        <main className="post-container" id="lws-postContainer">
            {/* <!-- single post --> */}

            {/* {content} */}


            {
                newPosts.map(newPost =>
                    <SingleNewestCard
                        key={newPost.id} newPost={newPost} />
                )
            }


            {/* <!-- Single Post Ends --> */}

        </main>
    );
};

export default NewestCard;