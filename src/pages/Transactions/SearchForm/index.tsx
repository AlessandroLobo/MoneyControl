import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./styles"

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Busque por transações"
        // {...register("query")}
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
