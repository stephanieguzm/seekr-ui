import { useLazyQuery, gql } from '@apollo/client'
import { useState } from 'react'
import { GET_SEARCH_RESULTS } from '../../queries'

const SearchForm = () => {
  const [ searchInput, setSearchInput ] = useState('')

  const [ getSearchResults, {loading, data, error, refetch }] = useLazyQuery(GET_SEARCH_RESULTS)

  const handleSearch = (event) => {
    // getSearchResults({
    //   variables: { title: searchInput.toUpperCase()}
    // })
    event.preventDefault()
    console.log('I made it in!')
  }

  if (loading) return <p className="loading-message">Loading...</p>
  // if (error || !data) return <p className='error-message'>Oops! No results match your search terms. Try your search again.</p>
  if (data) {
    console.log(data)
  }

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
    </div>
  )
}

export default SearchForm