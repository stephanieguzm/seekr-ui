import Result from '../Result/Result'
import './SearchResults.css'

const SearchResults = ({ data }) => {
  const companies = data.keywordSearch

  const companyListings = companies.map(company => {
    return <Result
      company={company}
      id={company.id}
      key={company.id}
    />
  })

  return (
    <div className='search-results-container'>
      {companyListings}
    </div>
  )
}

export default SearchResults