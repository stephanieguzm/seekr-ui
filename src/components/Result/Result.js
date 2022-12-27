import './Result.css'

const Result = ({ companyName, description, hiringLink, locationsHiringIn, oneNiceThing, rolesHiringFor, id }) => {
  return (
    <div className='result-card' id={id}>
      <h3 className='company-name' data-cy='company-name'>{companyName}</h3>
      <p>Seeking: </p>
      <h4>{rolesHiringFor}</h4>z
      <p>Location(s): {locationsHiringIn}</p>
      <button>Learn More</button>
    </div>
  )
}

export default Result