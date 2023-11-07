


const MyBidsCart = ({bid}) => {
    const {title,buyerEmail,deadline,price}=bid
   
    return (
        <tr>
           
            <td>{title}</td>
            <td>{buyerEmail}</td>
            <td>
                {price}
            </td>
            <td>{deadline}</td>
            {/* <th>
                {
                    status === 'confirm' ? <span className="font-bold text-blue-700">Confirm</span> :
                    <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">pending</button>}
            </th> */}
        </tr>
    );
};

export default MyBidsCart;