import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Addtransaction } from '../donnes/actions';
import { Link } from 'react-router-dom';
function Newtransaction() {
    const [Text, SetText] = useState('');
    const [Amount, SetAmount] = useState(0);
    const dispatch = useDispatch();
    const transactions = useSelector((trans) => trans.transactions);
    const autoId = transactions.length === 0 ? 1 : Math.max(...transactions.map((e)=>e.id)) + 1;

    const HandleTransaction = () => {
        dispatch(Addtransaction({ id: autoId, text: Text, amount: Amount }))
    }


    return (
        <div>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id='text' value={Text} onChange={(e) => SetText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" id='amount' placeholder="Enter amount..." value={Amount} onChange={(e) => SetAmount(e.target.value)} />
                </div>
                <Link to='/'><button className="btn" onClick={HandleTransaction}>Add transaction</button></Link>
            </form>
        </div>

    )
}

export default Newtransaction
