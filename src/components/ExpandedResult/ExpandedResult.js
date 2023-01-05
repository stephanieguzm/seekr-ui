import './ExpandedResult.css'

const ExpandedResult = ({ selectedCompany }) => {
  console.log(selectedCompany)
  return (
    <div className='expanded-result-container' id={selectedCompany.id}>
      <div className='exp-result-header'>
        <h3>{selectedCompany.companyName}</h3>
        {selectedCompany.hiringLink && <form target='_blank' rel='noreferrer'>
          <button className='apply-button' formAction={selectedCompany.hiringLink} >APPLY HERE</button>
        </form>}
      </div>
      <p className=''>Location(s): {selectedCompany.locationsHiringIn}</p>
      <p>Hiring for: {selectedCompany.rolesHiringFor}</p>
      {selectedCompany.description && <p>Description: {selectedCompany.description}</p>}
      {selectedCompany.oneNiceThing && <p>One nice thing: {selectedCompany.oneNiceThing}</p>}
      {selectedCompany.comments && <p>Comments: {selectedCompany.comments}</p>}
    </div>
  )
}

export default ExpandedResult