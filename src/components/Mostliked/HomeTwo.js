import React from 'react';
import LikedCard from './LikedCard';
import SideBar from '../sideBar/SideBar';

const HomeTwo = () => {
    return (
        <div>
            <section className="wrapper">
                <SideBar />
                {/* <!-- posts container  --> */}
                <LikedCard />
                {/* <!-- posts container ends --> */}
            </section>

        </div>
    );
};

export default HomeTwo;