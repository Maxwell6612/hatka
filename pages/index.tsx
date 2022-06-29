import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="s">
      <Head>
        <title>Hatka by Miras+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    {/*Banner */}
    </div>
  )
}

export default Home
