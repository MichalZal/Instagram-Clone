import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed/Feed'
import Modal from '../components/Feed/Modal'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll
    scrollbar-hide">
      <Head>
        <meta name="description" content="This is instagram clone made in nextJS" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Michał Zalewski"/>
      </Head>

      <Modal />
      <Header />
      <Feed />
    </div>
  )
}
