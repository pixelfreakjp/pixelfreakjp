import React from 'react'
import type { NextPage } from 'next'
import ProtectedPage from '../components/ProtectedPage'

const AboutPage: NextPage = () => {
  return (
    <ProtectedPage>
      <h1>hello</h1>
    </ProtectedPage>
  )
}

export default AboutPage
