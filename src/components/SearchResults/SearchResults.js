import Result from '../Result/Result'

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
      <h3>These are your search results!</h3>
      {companyListings}
    </div>
  )
}

export default SearchResults