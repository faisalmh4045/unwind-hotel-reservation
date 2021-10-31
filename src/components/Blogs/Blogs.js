import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../images/blog-1.webp';
import img2 from '../../images/blog-2.webp';
import img3 from '../../images/blog-3.webp';
import img4 from '../../images/blog-4.webp';

const Blogs = () => {
    return (
        <div>
            <div className='container mt-5 pb-5'>
                <div className='text-center mb-5 pt-5 pb-1'>
                    <h6 style={{ color: 'rgb(197,168,128)' }}>OUR BLOG</h6>
                    <h1>Recent Blog</h1>
                </div>
                <Row xs={1} lg={4} className="g-4">
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className='img-fluid' src={img1} />
                            <Card.Body>
                                <div className='d-flex justify-content-between mb-3'>
                                    <small className='text-muted'>OCT. 20, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>3 COMMENTS</small>
                                </div>
                                <Card.Title>Best Hotel Near Beach in Hawaii</Card.Title>
                                <Card.Text><small className='text-muted'>The rooms at the Unwind Hotel are new, well-lit and inviting. Our reception staff will be happy to help you during your stay.</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className='img-fluid' src={img2} />
                            <Card.Body>
                                <div className='d-flex justify-content-between mb-3'>
                                    <small className='text-muted'>OCT. 22, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>3 COMMENTS</small>
                                </div>
                                <Card.Title>Romantic Weekend in Taormina</Card.Title>
                                <Card.Text><small className='text-muted'>While you enjoy a cocktail by the swimming pool on the rooftop terrace, you will be stunned by the breathtaking view of the bay.</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className='img-fluid' src={img3} />
                            <Card.Body>
                                <div className='d-flex justify-content-between mb-3'>
                                    <small className='text-muted'>NOV. 01, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>3 COMMENTS</small>
                                </div>
                                <Card.Title>Sharing moments with your beloved one</Card.Title>
                                <Card.Text><small className='text-muted'>At the end of a stairway across from the hotel, the white pebbles on the beach of Isola Bella await you as well as beach facilities with lounge chairs</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className='img-fluid' src={img4} />
                            <Card.Body>
                                <div className='d-flex justify-content-between mb-3'>
                                    <small className='text-muted'>NOV. 03, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>3 COMMENTS</small>
                                </div>
                                <Card.Title>Best View of the bay you can perseave.</Card.Title>
                                <Card.Text><small className='text-muted'>The Suite Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of the sea.</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blogs;