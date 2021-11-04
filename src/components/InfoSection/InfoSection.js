import React from 'react';
import { Col, Row } from 'react-bootstrap';

const InfoSection = () => {
    return (
        <div style={{ backgroundColor: '#222222' }} className='container-fluid py-5'>
            <Row xs={1} md={2} lg={4} className="g-4 text-center">
                <Col>
                    <div>
                        <h2 style={{ color: '#c5a880' }}><b>38,900</b></h2>
                        <h6 style={{ color: '#c7c7c7' }}># of Happy Guests</h6>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2 style={{ color: '#c5a880' }}><b>320</b></h2>
                        <h6 style={{ color: '#c7c7c7' }}># of Rooms</h6>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2 style={{ color: '#c5a880' }}><b>1,000</b></h2>
                        <h6 style={{ color: '#c7c7c7' }}># of Staffs</h6>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2 style={{ color: '#c5a880' }}><b>587</b></h2>
                        <h6 style={{ color: '#c7c7c7' }}># of Destination</h6>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default InfoSection;