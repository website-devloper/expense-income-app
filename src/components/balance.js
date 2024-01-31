import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Balance() {
  const transactions = useSelector((state) => state.transactions);
  const amounts = transactions.map((e) => e.amount);
  const total = amounts.reduce((total, amount) => total + parseInt(amount), 0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(total);
  }, [total]);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </div>
  );
}

export default Balance;
