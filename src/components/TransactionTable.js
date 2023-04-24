import React from "react";
import Transaction from "./Transaction";

function TransactionTable (props) {
    const transactions=props.transactions
        return (
            <table >
              <tbody>
                { <tr>
                  <th>
                    <h3 className="ui center aligned header">Date</h3>
                  </th>
                  <th>
                    <h3 className="ui center aligned header">Description</h3>
                  </th>
                  <th>
                    <h3 className="ui center aligned header">Category</h3>
                  </th>
                  <th>
                    <h3 className="ui center aligned header">Amount</h3>
                  </th>
                </tr> }
        
                {transactions.map(transaction => {
                  return (
                  <Transaction
                  key={transaction.id}
                  date={transaction.date}
                  description={transaction.description}
                  category={transaction.category}
                  amount={transaction.amount}
          
                  />
                );
                  }
                ) 
              }
              
              
              
              </tbody>
            </table>
          );
        }
        
        export default TransactionTable;