import './Result.css'

const Result = ({ company, setSelectedCompany }) => {

  const expandResult = () => {
    setSelectedCompany({...company})
  }

  return (
    <div className='results-container'>
      <div className='result-card' id={company.id}>
        <h3 className='company-name' data-cy='company-name'>{company.companyName}</h3>
        <div className='details'>
          <p>Seeking: {company.rolesHiringFor}</p>
          <p>Location(s): {company.locationsHiringIn}</p>
          <button onClick={() => expandResult()}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Result