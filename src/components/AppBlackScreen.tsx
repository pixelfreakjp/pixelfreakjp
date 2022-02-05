import React from 'react'

const Sidebar: React.FC<{ updateSidebarState: () => void }> = ({ updateSidebarState }) => {
  return (
    <div
      className="fixed inset-0 h-screen w-screen bg-black bg-opacity-60 z-10"
      onClick={() => updateSidebarState()}
    ></div>
  )
}

export default Sidebar
