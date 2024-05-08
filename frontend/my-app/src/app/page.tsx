"use client";

import { useEffect, useState } from "react";
import api from "@/app/api/api";
import '@/app/globals.css'

interface ITransaction {
  transaction_id: number;
  transaction_value: number;
}

export default function Home() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await api.get("/transactions");
      setTransactions(response.data);
    }
    catch (err: any) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
      else {
        console.log(`Error: ${err.message}`)
      }
    }
  }
  
  useEffect(() => {
    fetchBooks();
  })
  
  return (
    <>
      { transactions.map((transaction, i) => (
        <table>
          <tr>
            <td>Transaction ID</td>
            <td>Transaction Value</td>
          </tr>
          <tr>
            <td>{transaction.transaction_id}</td>
            <td>{transaction.transaction_value}</td>
          </tr>
        </table>
      ))}
    </>
  );
}
