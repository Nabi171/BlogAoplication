import React from 'react';
import NavBar from '../navBar/NavBar';
import SideCard from '../Cards/SideCard';
import SideBar from '../sideBar/SideBar';

const Home = () => {
    return (
        <div>
            {/* <NavBar /> */}
            {/* <!-- navbar end  --> */}

            {/* <!-- main --> */}
            <section className="wrapper">
                <SideBar />
                {/* <!-- posts container  --> */}
                <SideCard />
                {/* <!-- posts container ends --> */}
            </section>


        </div>
    );
};

export default Home;