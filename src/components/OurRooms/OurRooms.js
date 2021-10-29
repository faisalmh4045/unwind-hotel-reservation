import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Room from '../Room/Room';

const OurRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // const url = `http://localhost:5000/rooms`;
        const url = `https://cryptic-temple-38934.herokuapp.com/rooms`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRooms(data))
    }, []);

    const history = useHistory();
    const handleBookNow = (id) => {
        history.push(`/placeOrder/${id}`);
    }

    return (
        <div>
            <Row lg={3} className="g-4">
                {
                    rooms.length > 0 ?
                        rooms.map(room => <Room
                            key={room._id}
                            room={room}
                            handleBookNow={handleBookNow}
                        ></Room>)
                        :
                        <div className='container text-center mt-5'>
                            <Spinner animation="border" variant="dark" />
                        </div>
                }
            </Row>
        </div>
    );
};

export default OurRooms;