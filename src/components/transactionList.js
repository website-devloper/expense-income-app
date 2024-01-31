import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import {Deletetransaction} from '../donnes/actions';

function TransactionList() {
  const transactions = useSelector((trans) => trans.transactions);
  // const dispatch=useDispatch();
  //  const navigate=useNavigate();

  // const handleDelete=(id)=>{
  //   dispatch(Deletetransaction(id));
  //    navigate('/');
  // }
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (<li key={transaction.id} className={transaction.amount < 0 ? "minus" : "plus"}>
          {transaction.text} <span>{transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}</span>
          <button className="delete-btn" >x</button>
        </li>))}
        {/* onClick={handleDelete(transaction.id)} */}
      </ul>
    </div>
  )
}

export default TransactionList;
