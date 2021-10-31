import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1a1a1a' }} className='py-5 mt-5 text-light'>
            <Container>
                <Row className='row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 mb-4'>
                    <Col className='mb-3'>
                        <p>About</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Help</p>
                        <p>Easy Booking</p>
                    </Col>
                    <Col className='mb-3'>
                        <p>Our Location</p>
                        <p>The Rooms & Suites</p>
                        <p>Contact us</p>
                        <p>Resto & Bar</p>
                        <p>Rooms</p>
                    </Col>
                    <Col className='mb-3'>
                        <div className='mb-4'>
                            <p><i class="fas fa-map-marker-alt pe-2"></i><i>Address</i></p>
                            <small >98 South-Middle Halishahar</small><br />
                            <small >Bandar, Chattogram.</small>
                        </div>
                        <div>
                            <p><i class="fas fa-envelope pe-2"></i><i>Email</i></p>
                            <small >Foysalnk9095@gmail.com</small>
                        </div>
                    </Col>
                    <Col className='mb-3'>
                        <p>Sign up for our newsletter</p>
                        <div className='newsletter mb-3 d-flex flex-nowrap'>
                            <input className='border-0 ps-3 ps-lg-1 ps-xl-3 pe-0 py-3' type="email" placeholder='Email' />
                            <button className='border-0 bg-secondary px-3 py-3'><i className="fas fa-location-arrow text-light"></i></button>
                        </div>
                    </Col>
                </Row>
                <hr />
                <div className='d-flex flex-wrap justify-content-lg-between'>
                    <div>
                        All rights reserved © Unwind 2021
                    </div>
                    <div>
                        <small>Terms & Conditions</small>
                        <small className='mx-4'>Claim</small>
                        <small>Privacy & Policy</small>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;