import { useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_SEARCH_RESULTS } from '../../queries'
import SearchResults from '../SearchResults/SearchResults'
import './SearchForm.css'

const SearchForm = () => {
  const [ searchInput, setSearchInput ] = useState('')

  const [ getSearchResults, {loading, data, error, refetch }] = useLazyQuery(GET_SEARCH_RESULTS)

  const handleSearch = (event) => {
    event.preventDefault()
    if (!searchInput) {
      return <p className='empty-search-message' data-cy='empty-search-message'>Please enter in a search term</p>
    } else {
      getSearchResults({
        variables: { keyword: searchInput}
      })
    }
    setSearchInput('')
  }

  if (loading) return <p className="loading-message">Loading...</p>
  if (error) return <p className='error-message'>Oops! No results match your search terms. Try your search again.</p>

  return (
    <div className='search-form-container'>
      <form className='search-form' data-cy='search-form'>
        <input 
          type='text'
          name='search'
          placeholder='Search'
          data-cy='search-form-input'
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button 
          className='search-form-button' 
          data-cy='search-form-button' 
          onClick={(event) => handleSearch(event)}>SUBMIT</button>
      </form>
      {data && (
        <SearchResults data={data} />
      )}
    </div>
  )
}

export default SearchForm