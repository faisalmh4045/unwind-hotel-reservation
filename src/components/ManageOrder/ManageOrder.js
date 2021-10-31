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
            <td className='text-center'><span><button className='btn btn-outline-success' onClick={() => handleApproveOrder(_id)}><i class="fas fa-check-circle"></i></button></span></td>
            <td className='text-center'><span><button className='btn btn-outline-danger' onClick={() => handleCancelOrder(_id)}><i class="fas fa-times-circle"></i></button></span></td>
        </tr>
    );
};

export default ManageOrder;