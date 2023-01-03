const ExpandedResult = ({ selectedCompany }) => {
  return (
    <div className='expanded-result'>
      <h3>{selectedCompany.companyName}</h3>
      <h4>{selectedCompany.locationsHiringIn}</h4>
      <h4>{selectedCompany.rolesHiringFor}</h4>
    </div>
  )
}

export default ExpandedResult