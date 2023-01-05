import './Result.css'

const Result = ({ company, setSelectedCompany }) => {

  const expandResult = () => {
    setSelectedCompany({...company})
  }

  return (
    <div className='result-card' id={company.id}>
      <h3 className='company-name' data-cy='company-name'>{company.companyName}</h3>
      <div className='details'>
        {company.rolesHiringFor && <p>Seeking: {company.rolesHiringFor}</p>}
        {company.locationsHiringIn && <p>Location(s): {company.locationsHiringIn}</p>}
        <button className='learn-more-button' onClick={() => expandResult()}>LEARN MORE</button>
      </div>
    </div>
  )
}

export default Result