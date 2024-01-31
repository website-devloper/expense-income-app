import './App.css';
import Balance from './components/balance.js';
import Header from './components/header.js';
import Incomeexpense from './components/incomeexpense.js';
import Newtransaction from './components/newtransaction.js';
import TransactionList from './components/transactionList.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <Incomeexpense />
          <TransactionList />
          <Newtransaction />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
