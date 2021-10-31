import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import InfoSection from '../InfoSection/InfoSection';
import OurRooms from '../OurRooms/OurRooms';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurRooms></OurRooms>
            <Testimonial></Testimonial>
            <InfoSection></InfoSection>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;