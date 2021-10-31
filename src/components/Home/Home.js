import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import OurRooms from '../OurRooms/OurRooms';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurRooms></OurRooms>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;