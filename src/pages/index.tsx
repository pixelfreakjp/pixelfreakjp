import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import NewsBar from '../components/NewsBar'
import type { GetServerSideProps } from 'next'
import prisma, { User } from '../../lib/prisma'

type Props = {
  users: User[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const users = await prisma.user.findMany()
  return { props: { users } }
}

const Home = (props: Props) => {
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
          <h1>PixelFreakJP</h1>
          <Link href="/about">
            <a>About</a>
          </Link>
          <h2>ユーザー一覧</h2>
          {props.users.map((user) => {
            return <p>{user.email}</p>
          })}
        </div>
        <div className="w-full md:w-96">
          <NewsBar />
        </div>
      </div>
    </div>
  )
}

export default Home
