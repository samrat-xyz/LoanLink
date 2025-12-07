import React, { useState, useEffect } from 'react'
import Navbar from '../shared/Header/Navbar'
import { Outlet } from 'react-router'
import Loading from '../components/Loading/Loading'
import Footer from '../shared/Footer/Footer'

function RootLayout() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (1 second)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default RootLayout
