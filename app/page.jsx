import React from 'react'
import Feed from '@components/Feed.jsx'
import LandingPage from '@components/LandingPage'

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
        <LandingPage />
        <Feed />
    </section >
  )
}

export default Home