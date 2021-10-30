import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'
import img from '../../images/banner.png'

const Banner = () => {
    return (
        <div>
            <div className='mb-5 position-relative text-center'>
                <div>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='info text-light'>
                    <p>ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!</p>
                    <h1>Most Relaxing Place</h1>
                    <Button id='btn-get-started' variant='light' className='m-0 mt-lg-2 w-50 text-uppercase'>Take a tour</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;