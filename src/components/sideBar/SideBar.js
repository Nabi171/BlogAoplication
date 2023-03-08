import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { fetchnewPosts } from '../../features/newest/newPostsSlice';
import { useSelector, useDispatch } from 'react-redux';

const SideBar = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { newPosts } = useSelector((state) => state.newPosts);
    console.log(newPosts)
    useEffect(() => {
        dispatch(fetchnewPosts());
    }, [dispatch]);


    function handleOptionSelect(event) {
        // event.preventDefault();

        setSelectedOption(event.target.value);
        if (event.target.value == "most_liked") {
            navigate('/hometwo');
        }
        if (event.target.value == "default") {
            navigate('/home');
        }
        if (event.target.value == "newest") {
            navigate('/newest');
        }
        // console.log(selectedOption)
        // console.log(event.target.value)
        // window.location.reload();
        // perform some action or update state based on the selected option
    }



    return (
        <div>
            <aside>
                <div className="sidebar-items">
                    <div className="sidebar-content">
                        <h4>Sort</h4>
                        <select
                            value={selectedOption} onChange={handleOptionSelect}
                            name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                            <option
                                value="default"
                            >Default</option>
                            <option value="newest">Newest</option>
                            <option

                                value="most_liked">
                                Most Liked         </option>
                        </select>
                    </div>
                    <div className="sidebar-content">
                        <h4>Filter</h4>
                        <div className="radio-group">
                            {/* <!-- handle filter on button click --> */}
                            <div>
                                <input type="radio" name="filter" id="lws-all" checked className="radio" />
                                <label for="lws-all">All</label>
                            </div>
                            <div>
                                <input type="radio" name="filter" id="lws-saved" className="radio" />
                                <label for="lws-saved">Saved</label>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default SideBar;