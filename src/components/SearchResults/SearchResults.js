import Result from '../Result/Result'
import ExpandedResult from '../ExpandedResult/ExpandedResult'
import './SearchResults.css'
import { useState } from 'react'

const SearchResults = ({ data }) => {

  const [ selectedCompany, setSelectedCompany ] = useState({})
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
      {selectedCompany && <ExpandedResult 
        selectedCompany={selectedCompany}
        key={selectedCompany.id}
      />}
    </div>
  )
}

export default SearchResults