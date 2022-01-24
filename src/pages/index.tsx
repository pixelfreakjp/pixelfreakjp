import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>PixelFreak</h1>
    </div>
  )
}

export default Home
