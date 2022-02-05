import React, { Dispatch, SetStateAction } from 'react'
import { List } from 'phosphor-react'

const Header: React.FC<{ updateSidebarState: () => void }> = ({ updateSidebarState }) => {
  return (
    <div className="flex flex-row py-4">
      <div className="basis-1/3 flex items-center">
        <List size={32} className="md:hidden" onClick={() => updateSidebarState()} />
      </div>
      <div className="basis-1/3">
        <img src="/images/logo.svg" height="35" width="35" className="h-10 mx-auto" />
      </div>
      <div className="basis-1/3 flex items-center justify-end">
        <p className="text-right">アカウント作成</p>
      </div>
    </div>
  )
}

export default Header
