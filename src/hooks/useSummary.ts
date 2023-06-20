import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { useMemo } from 'react'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return summary
}
