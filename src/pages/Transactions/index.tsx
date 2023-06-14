import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Web app development</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>sale</td>
              <td>12/06/2023</td>
            </tr>

            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 59,00</PriceHighlight>
              </td>
              <td>Food</td>
              <td>12/06/2023</td>
            </tr>

            <tr>
              <td width="50%">Web app development</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>sale</td>
              <td>12/06/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
