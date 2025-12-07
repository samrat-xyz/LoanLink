import React from 'react'
import Hero from '../../home-components/Hero/Hero'
import Intro from '../../home-components/Intro/Intro'
import LoanService from '../../home-components/LoanService/LoanService'
import BusinessLoans from '../../home-components/BusinessLoans/BusinessLoans'
import Testimonial from '../../home-components/Testimonial/Testimonial'
import Stats from '../../home-components/Stats/Stats'

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Intro></Intro>
      <LoanService></LoanService>
      <BusinessLoans></BusinessLoans>
      <Testimonial></Testimonial>
      <Stats></Stats>
    </div>
  )
}

export default Home
