import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementPayloadValueAndAddValue } from '../../features/LikeCounter/likesCounterSlice';

const DetailPost = ({ post }) => {
    const { title, description, image, tags, likes, isSaved } = post;
    // const dispatch = useDispatch();
    // const [count, setCount] = useState(likes);
    // const handleClik = () => {
    //     // setCount(parseInt(likes) + 1);

    //     const no = dispatch(increment(likes));

    // }


    const dispatch = useDispatch();
    const [value, setValue] = useState(parseInt(likes));
    console.log(value)
    // const payloadValue = useSelector((state) => state.mySlice.payloadValue);

    const handleAddValue = () => {
        dispatch(incrementPayloadValueAndAddValue(parseInt(likes)));
        setValue(value + 1)

    };


    return (
        <main className="post">
            <img src={image} />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    <span>#{tags[0]},</span> <span>#{tags[1]},</span> <span>#{tags[2]}</span>
                </div>
                <div className="btn-group">
                    {/* <!-- handle like on button click --> */}
                    <button className="like-btn" id="lws-singleLinks"
                        onClick={handleAddValue}
                    >
                        <i className="fa-regular fa-thumbs-up"></i> {value}
                    </button>
                    {/* <!-- handle save on button click -->
          <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
                    <button className="active save-btn" id="lws-singleSavedBtn">
                        <i className="fa-regular fa-bookmark"></i> Saved
          </button>
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default DetailPost;