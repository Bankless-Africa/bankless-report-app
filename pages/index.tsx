import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Community from '../components/Community'
import Reports from '../components/Reports'
import Sponsors from '../components/Sponsors'
import Solution from '../components/Solution'
import Offerings from '../components/Offerings'
import Join from '../components/Join'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bankless research reports</title>
        <meta name="description" content="Bankless research reports" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Community />
        <Reports />
        <Sponsors />
        <Solution />
        <Offerings />
        <div className='bg-gradient-to-br from-black via-white/25 to-white/10'>
          <Join />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Home
