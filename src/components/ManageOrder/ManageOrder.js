import React from 'react';

const ManageOrder = (props) => {
    const { _id, name, email, date, phone, status } = props.order;
    const { handleApproveOrder, handleCancelOrder } = props;

    return (
        <div className='d-flex justify-content-between mt-2 border p-3'>
            <span>{name}</span>
            <span>{email}</span>
            <span>{date}</span>
            <span>{phone}</span>
            <span>{status}</span>
            <span><button onClick={() => handleApproveOrder(_id)}>Approve</button></span>
            <span><button onClick={() => handleCancelOrder(_id)}>Delete</button></span>
        </div>
    );
};

export default ManageOrder;