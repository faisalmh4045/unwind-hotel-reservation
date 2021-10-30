import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Room = (props) => {
    const { _id, img, name, description, price } = props.room;
    const { handleBookNow } = props;
    return (
        <div>
            <Col>
                {/* <Card className='p-0 shadow-sm'> */}
                <Card className='p-0 border-0 shadow'>
                    <Card.Img variant="top" className='img-fluid rounded-3' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text><small className='text-muted'>{description}</small></Card.Text>
                        <Card.Text><small className='text-muted'>Price: ${price}</small></Card.Text>

                        <Button onClick={() => handleBookNow(_id)} variant='outline-dark' className='w-100'>Book now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Room;