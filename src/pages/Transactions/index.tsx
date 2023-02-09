import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./SearchForm"
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Deselvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$12.00,00</PriceHighlight>
              </td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hanburger</td>
              <td>
                {" "}
                <PriceHighlight variant="outcome">- R$59,00</PriceHighlight>
              </td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
