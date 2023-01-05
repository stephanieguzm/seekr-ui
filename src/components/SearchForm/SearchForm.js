import { useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_SEARCH_RESULTS } from '../../queries'
import SearchResults from '../SearchResults/SearchResults'
import './SearchForm.css'

const SearchForm = () => {
  const [ searchInput, setSearchInput ] = useState('')
  const [ searchValue, setSearchValue ] = useState('')
  const [ selectedCompany, setSelectedCompany ] = useState('')

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
    setSearchValue(searchInput)
    setSearchInput('')
    setSelectedCompany('')
  }

  const clearSearch = () => {
    setSearchValue('')
    setSearchInput('')
    setSelectedCompany('')
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
        <button 
          className='clear-search-button' 
          data-cy='clear-search-button' 
          onClick={(event) => clearSearch(event)}>Clear Search</button>
        {data && <p className='search-return-p'>Your search "{searchValue}" returned {data.keywordSearch.length} result(s)</p>}
      </form>
      {data && 
        <SearchResults 
          data={data} 
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      }
    </div>
  )
}

export default SearchForm