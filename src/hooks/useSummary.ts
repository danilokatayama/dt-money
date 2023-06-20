import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case 'income':
          acc.income += transaction.price
          acc.balance += transaction.price
          break
        case 'outcome':
          acc.outcome += transaction.price
          acc.balance -= transaction.price
          break
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      balance: 0,
    },
  )

  return summary
}
