import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [found, setFound] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        // const url = `http://localhost:5000/myOrders/${user.email}`;
        const url = `https://cryptic-temple-38934.herokuapp.com/myOrders/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])

    useEffect(() => {
        // const url = `http://localhost:5000/rooms`;
        const url = `https://cryptic-temple-38934.herokuapp.com/rooms`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRooms(data);
            })
    }, [])

    useEffect(() => {
        const found = [];
        rooms.forEach(room => {
            myOrders.forEach(order => {
                if (order.order === room._id) {
                    const newObj = room;
                    newObj.orderId = order._id;
                    // console.log(newObj);
                    found.push(newObj)
                }
            })
        })
        setFound(found);
    }, [rooms, myOrders])

    const handleCancelOrder = (id) => {
        console.log(id);
        // const url = `http://localhost:5000/deleteOrder/${id}`;
        const url = `https://cryptic-temple-38934.herokuapp.com/deleteOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('successfullly canceled!')
                    const reamainingServices = found.filter(service => service.orderId !== id)
                    setFound(reamainingServices);
                }
            })

    }

    return (
        <Container className='mt-5'>
            <Row lg={3} className="g-4">
                {
                    found.length > 0 ?
                        found.map(room => <Order
                            key={room._id}
                            room={room}
                            handleCancelOrder={handleCancelOrder}
                        ></Order>)
                        :
                        <div className='container text-center mt-5'>
                            <Spinner animation="border" variant="dark" />
                        </div>
                }
            </Row>
        </Container>
    );
};

export default MyOrders;