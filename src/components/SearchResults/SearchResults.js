import Result from '../Result/Result'

const SearchResults = ({ data }) => {
  return (
    <div className='search-results-container'>
      <h3>{data.companyName}</h3>
      <Result />
    </div>
  )
}

export default SearchResults