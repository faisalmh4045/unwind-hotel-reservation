import React from 'react';
import OurRooms from '../OurRooms/OurRooms';

const Home = () => {
    return (
        <div className='container'>
            <div className='my-5 p-5 rounded-3 text-center border border-secondary'>
                <h1>Banner</h1>
            </div>
            <OurRooms></OurRooms>
        </div>
    );
};

export default Home;