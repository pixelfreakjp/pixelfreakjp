import React from 'react'
import AppBlackScreen from './AppBlackScreen'
import WelcomeBoard from './WelcomeBoard'
import SideBarMenu from './SideBarMenu'

interface SideBarProps {
  sidebarIsActive: boolean
  updateSidebarState: () => void
}

const SideBar: React.FC<SideBarProps> = ({ sidebarIsActive, updateSidebarState }) => {
  const isHidden = sidebarIsActive ? '' : 'hidden md:block'

  return (
    <>
      {sidebarIsActive && <AppBlackScreen updateSidebarState={updateSidebarState} />}
      <div className={`sidebar ${isHidden} fixed md:relative inset-0 h-screen w-3/4 md:w-full z-20 bg-white`}>
        <WelcomeBoard />
        <SideBarMenu />
      </div>
    </>
  )
}

export default SideBar
