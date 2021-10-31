import React from 'react';

const ManageOrder = (props) => {
    const { _id, name, email, date, phone, status } = props.order;
    const { handleApproveOrder, handleCancelOrder } = props;

    return (
        <tr>
            <td>{email}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{date}</td>
            <td className={status === 'pending' ? 'text-danger' : 'text-success'}>{status}</td>
            <td><span><button onClick={() => handleApproveOrder(_id)}>Approve</button></span></td>
            <td><span><button onClick={() => handleCancelOrder(_id)}>Delete</button></span></td>
        </tr>
    );
};

export default ManageOrder;