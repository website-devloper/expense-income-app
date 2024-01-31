import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Incomeexpense() {
  const transactions = useSelector((state) => state.transactions);
  console.log(transactions);
  const amountsP = transactions.filter((e)=>e.amount>0).map((e) => e.amount);
  const totalI = amountsP.reduce((total, amount) => total + parseInt(amount), 0);
  const [income, setIncome] = useState(0);

  const amountsE = transactions.filter((e)=>e.amount<0).map((e) => e.amount);
  const totalE = amountsE.reduce((total, amount) => total + Math.abs(parseInt(amount)), 0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setIncome(totalI);
    setExpense(totalE);
  }, [totalI,totalE]);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>
    </>
  )
}

export default Incomeexpense
