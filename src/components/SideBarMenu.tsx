import React from 'react'
import SideBarMenuList from './SideBarMenuList'

const SidebarMenuList: React.FC = () => {
  return (
    <ul className="p-4">
      <SideBarMenuList text="🏠 ホーム" link="/" />
      <SideBarMenuList text="📰 ニュース" link="/" />
      <SideBarMenuList text="🕹 ゲーム" link="/" />
      <SideBarMenuList text="🎹 ミュージック" link="/" />
      <SideBarMenuList text="🎨 アート" link="/" />
      <SideBarMenuList text="👾 その他" link="/" />
    </ul>
  )
}

export default SidebarMenuList
