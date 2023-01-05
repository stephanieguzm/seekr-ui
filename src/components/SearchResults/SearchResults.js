import Result from '../Result/Result'
import ExpandedResult from '../ExpandedResult/ExpandedResult'
import './SearchResults.css'

const SearchResults = ({ data, selectedCompany, setSelectedCompany }) => {

  const companies = data.keywordSearch

  const companyListings = companies.map(company => {
    return <Result
      company={company}
      setSelectedCompany={setSelectedCompany}
      id={company.id}
      key={company.id}
    />
  })

  return (
    <div className='all-results-container'>
      <div className='search-results-container'>
        {companyListings}
      </div>
      <div className='expanded-result-container'>
        {!selectedCompany && <h3>Select a company to learn more</h3>}
        {selectedCompany && <ExpandedResult 
          selectedCompany={selectedCompany}
          key={selectedCompany.id}
        />}
      </div>
    </div>
  )
}

export default SearchResults