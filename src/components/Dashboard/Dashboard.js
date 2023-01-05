import SearchForm from '../SearchForm/SearchForm'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h2>Search for a term to see matching jobs</h2>
      <SearchForm />
    </div>
  )
}

export default Dashboard