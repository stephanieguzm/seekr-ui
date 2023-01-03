import ExpandedResult from '../ExpandedResult/ExpandedResult'
import { useState } from 'react'
import './Result.css'

const Result = ({ company, id }) => {

  const [ selectedCompany, setCompany ] = useState({})

  const expandResult = () => {
    setCompany({...company})
  }

  return (
    <div className='results'>
      <div className='result-card' id={company.id}>
        <h3 className='company-name' data-cy='company-name'>{company.companyName}</h3>
        <div className='details'>
          <p>Seeking: {company.rolesHiringFor}</p>
          <p>Location(s): {company.locationsHiringIn}</p>
          <button onClick={expandResult}>Learn More</button>
        </div>
      </div>
      {selectedCompany && <ExpandedResult 
        selectedCompany={selectedCompany}
        key={id}
      />}
    </div>
  )
}

export default Result