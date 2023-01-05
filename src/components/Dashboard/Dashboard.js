// import AllResults from '../AllResults/AllResults'
import SearchForm from '../SearchForm/SearchForm'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h2>Search for a term to see results</h2>
      <SearchForm />
      {/* <AllResults /> */}
    </div>
  )
}

export default Dashboard