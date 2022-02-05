import React from 'react'
import Link from 'next/link'

const SidebarMenuList: React.FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <li className="li">
      <Link href={link}>
        <a>{text}</a>
      </Link>
    </li>
  )
}

export default SidebarMenuList
