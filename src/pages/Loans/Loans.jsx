import React from 'react'
import Banner from '../../LoansComponent/Banner'
import AllLoans from '../../LoansComponent/AllLoans'

function Loans() {
  return (
    <div className='bg-base-100 min-h-6xl'>
      <Banner></Banner>
      <AllLoans></AllLoans>
    </div>
  )
}

export default Loans
