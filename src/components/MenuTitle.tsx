import React from 'react'

const MenuTitle: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="font-bold text-lg">{text}</h2>
}

export default MenuTitle
