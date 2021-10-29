import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleApproveOrder = (id) => {
        console.log(id);
        const updatedorder = orders.find(order => order._id === id);
        updatedorder.status = 'approved';

        const url = `http://localhost:5000/approve/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedorder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved Successfully');

                    // reset state & clear form after succesfull updation
                    // setUser({});
                    const remaining = orders.filter(order => order._id !== id);
                    remaining.push(updatedorder);
                    setOrders(remaining);
                }
            })
    }

    const handleCancelOrder = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('successfullly canceled!')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })

    }

    return (
        <div className='container mt-5'>
            {
                orders.map(order => <ManageOrder
                    key={order._id}
                    order={order}
                    handleApproveOrder={handleApproveOrder}
                    handleCancelOrder={handleCancelOrder}
                ></ManageOrder>)
            }
        </div>
    );
};

export default ManageOrders;