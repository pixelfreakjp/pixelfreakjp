import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import NewsBar from '../components/NewsBar'

const Home: NextPage = () => {
  const [sidebarIsActive, setSidebarIsActive] = React.useState<boolean>(false)
  const updateSidebarState = (): void => setSidebarIsActive(!sidebarIsActive)

  return (
    <div className="max-w-6xl mx-auto">
      <Header updateSidebarState={updateSidebarState} />
      <div className="md:flex">
        <div className="w-full md:w-96 bg-gray-200">
          <SideBar sidebarIsActive={sidebarIsActive} updateSidebarState={updateSidebarState} />
        </div>
        <div className="w-full">
          <h1>PixelFreak</h1>
        </div>
        <div className="w-full md:w-96">
          <NewsBar />
        </div>
      </div>
    </div>
  )
}

export default Home
