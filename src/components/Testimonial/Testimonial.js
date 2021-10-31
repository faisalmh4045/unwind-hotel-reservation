import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <div>
            <div className='container my-5 pb-5'>
                <div className='text-center mb-5 pt-5 pb-1'>
                    <h6>TESTIMONIAL</h6>
                    <h1>Happy Guests</h1>
                </div>
                <Row xs={1} lg={4} className="g-4">
                    <Col>
                        <Card className='p-lg-3 border-0 shadow'>
                            <Card.Body>
                                <Card.Text><i style={{ color: 'rgb(197,168,128)' }} class="fas fa-quote-left fs-3"></i></Card.Text>
                                <Card.Text><small className='text-muted'>Ocean front, gorgeous pool areas, beautiful bar and restaurant, excellent service with historic, very well appointed rooms.</small></Card.Text>
                                <Card.Text><small className='text-dark'>Roger Scott</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-lg-3 border-0 shadow'>
                            <Card.Body>
                                <Card.Text><i style={{ color: 'rgb(197,168,128)' }} class="fas fa-quote-left fs-3"></i></Card.Text>
                                <Card.Text><small className='text-muted'>Old beach charm! Gorgeous room with fabulous view but the best was the staff. I particularly thank Emily at the desk.</small></Card.Text>
                                <Card.Text><small className='text-dark'>Ashley</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-lg-3 border-0 shadow'>
                            <Card.Body>
                                <Card.Text><i style={{ color: 'rgb(197,168,128)' }} class="fas fa-quote-left fs-3"></i></Card.Text>
                                <Card.Text><small className='text-muted'>BEAUTIFUL resort with great amenities. We stayed in an oceanfront king room that overlooked the pool and ocean.</small></Card.Text>
                                <Card.Text><small className='text-dark'>Jessica</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-lg-3 border-0 shadow'>
                            <Card.Body>
                                <Card.Text><i style={{ color: 'rgb(197,168,128)' }} class="fas fa-quote-left fs-3"></i></Card.Text>
                                <Card.Text><small className='text-muted'>I've always preferred small hotels for the intimacy and personal attention they offer and the Suite certainly typifies those qualities. </small></Card.Text>
                                <Card.Text><small className='text-dark'>Carmen</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Testimonial;