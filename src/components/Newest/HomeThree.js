import React from 'react';
import SideBar from '../sideBar/SideBar';
import NewestCard from './NewestCard';

const HomeThree = () => {
    return (
        <div>
            <section className="wrapper">
                <SideBar />
                {/* <!-- posts container  --> */}
                <NewestCard />
                {/* <!-- posts container ends --> */}
            </section>

        </div>
    );
};

export default HomeThree;