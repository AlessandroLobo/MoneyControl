import { Children, ReactNode, createContext, useEffect, useState } from "react"
import { string } from "zod/lib"

interface Transactions {
  id: number
  description: string
  type: "income" | "outcome"
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transactions[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3000/transactions")

    if (query) {
      url.searchParams.append("q", query)
    }
    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
