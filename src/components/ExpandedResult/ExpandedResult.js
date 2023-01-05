import './ExpandedResult.css'

const ExpandedResult = ({ selectedCompany }) => {
  return (
    <>
      <div className='exp-result-header'>
        <h3 className='exp-result-fixed'>{selectedCompany.companyName}</h3>
        <form target='_blank' rel='noreferrer'>
          <button className='apply-button' formAction={selectedCompany.hiringLink} >APPLY HERE</button>
        </form>
      </div>
      <p className=''>Location(s): {selectedCompany.locationsHiringIn}</p>
      <p>Hiring for: {selectedCompany.rolesHiringFor}</p>
      <p>Description: {selectedCompany.description}</p>
      {selectedCompany.oneNiceThing && <p>One nice thing: {selectedCompany.oneNiceThing}</p>}
      {selectedCompany.comments && <p>Comments: {selectedCompany.comments}</p>}
    </>
  )
}

export default ExpandedResult