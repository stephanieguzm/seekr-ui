import Result from '../Result/Result'
import './SearchResults.css'

const SearchResults = ({ data }) => {
  const companies = data.keywordSearch

  const companyListings = companies.map(company => {
    return <Result
      companyName={company.companyName}
      description={company.description}
      hiringLink={company.hiringLink}
      locationsHiringIn={company.locationsHiringIn}
      oneNiceThing={company.oneNiceThing}
      rolesHiringFor={company.rolesHiringFor}a
      id={company.id}
      key={company.id}
    />
  }
  )

  return (
    <div className='search-results-container'>
      {companyListings}
    </div>
  )
}

export default SearchResults