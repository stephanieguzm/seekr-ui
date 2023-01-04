// import AllResults from '../AllResults/AllResults'
import SearchForm from '../SearchForm/SearchForm'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h3>Search for a term to see matching results</h3>
      <SearchForm />
      {/* <AllResults /> */}
    </div>
  )
}

export default Dashboard