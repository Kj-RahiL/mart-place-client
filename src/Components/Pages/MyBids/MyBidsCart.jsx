


const MyBidsCart = ({bid}) => {
    const {title,buyerEmail,deadline,price, status}=bid
   
    return (
        <tr>
           
            <td>{title}</td>
            <td>{buyerEmail}</td>
            <td>
                {price}
            </td>
            <td>{deadline}</td>
            {}
            <td>
                {
                    status === 'accepted' ? <span>in progress</span> : status === ' reject' ? <span>canceled</span> : status
                } 
            </td>
            <td>
                {
                    status === 'accepted' ? <span className="btn">complete</span> : <span className='btn' disabled="disabled">complete</span> 
                }
            </td>
            {/* <th>
                {
                    status === 'confirm' ? <span className="font-bold text-blue-700">Confirm</span> :
                    <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">pending</button>}
            </th> */}
        </tr>
    );
};

export default MyBidsCart;