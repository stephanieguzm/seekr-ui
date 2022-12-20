import Result from '../Result/Result'
import { useQuery, gql } from '@apollo/client'

const AllResults = () => {
  return (
    <div className='all-results-container'>
      <h3>this holds all the results</h3>
      <Result />
      <Result />
    </div>
  )
}

export default AllResults