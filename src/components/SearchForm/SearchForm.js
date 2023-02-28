import { useLazyQuery } from '@apollo/client'
import { useState, useEffect, useRef } from 'react'
import { GET_SEARCH_RESULTS } from '../../queries'
import SearchResults from '../SearchResults/SearchResults'
import './SearchForm.css'

const SearchForm = () => {
  const [ searchInput, setSearchInput ] = useState('')
  const [ searchValue, setSearchValue ] = useState('')
  const [ selectedCompany, setSelectedCompany ] = useState('')
  const [ emptySearch, setEmptySearch ] = useState(false)
  const ref = useRef()
  const [ hasFocus, setFocus ] = useState(false)

   useEffect(() => {
    if (document.hasFocus() && ref.current.contains(document.activeElement)) {
      setFocus(true);
    }
  }, []);

  const [ getSearchResults, {loading, data, error }] = useLazyQuery(GET_SEARCH_RESULTS)

  const handleSearch = (event) => {
    event.preventDefault()
    if (!searchInput) {
      setEmptySearch(prevState => !prevState)
    } else {
      getSearchResults({
        variables: { keyword: searchInput}
      })
    }
    setSearchValue(searchInput)
    resetSearch()
  }

  const resetSearch = () => {
    emptySearch && setEmptySearch(prevState => !prevState)
    setSelectedCompany('')
    setSearchInput('')
    window.blur()
  }

  if (loading) return <p className="loading-message">Loading...</p>
  if (error) return <p className='error-message'>Oops, our servers are down! Please visit us again later.</p>

  return (
    <div className='search-form-container'>
      <form className='search-form' data-cy='search-form'>
        <input 
          type='text'
          name='search'
          placeholder='Search'
          data-cy='search-form-input'
          value={searchInput}
          ref={ref}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button 
          className='search-form-button' 
          data-cy='search-form-button' 
          onClick={(event) => handleSearch(event)}>SUBMIT</button>
        {emptySearch && <p className='search-return-p' style={{color: "red"}}>Please enter a search term.</p>}
        {data && !emptySearch && <p className='search-return-p'>Your search "{searchValue}" returned {data.keywordSearch.length} result(s).</p>}
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