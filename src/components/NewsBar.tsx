import React from 'react'
import MenuTitle from './MenuTitle'

const NewsBar: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <MenuTitle text="注目の記事" />
      <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
      </ul>
    </div>
  )
}

export default NewsBar
