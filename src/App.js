import { useState,useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Transaction from './components/Transaction';
import TransactionTable from './components/TransactionTable';

function App() {
  const [transaction, setTransaction]=useState([])

  useEffect(() => {
   fetch ("https://localhost:3000/transactions")
   .then((response)=>response.json())
   .then((data)=>setTransaction(data))
  },[] )


  return (

    <div>
      <h2>The Royal Bank of Flatiron</h2>
      <Transaction/>
      <TransactionTable/>
      <Search/>
    </div>

  ) 
}

export default App;
