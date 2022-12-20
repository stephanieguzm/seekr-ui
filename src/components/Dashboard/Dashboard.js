import AllResults from '../AllResults/AllResults'
import SearchForm from '../SearchForm/SearchForm'
import SearchResults from '../SearchResults/SearchResults'
import { useQuery, gql } from '@apollo/client'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h3>this is the dashboard</h3>
      <SearchForm />
      <AllResults />
    </div>
  )
}

export default Dashboard