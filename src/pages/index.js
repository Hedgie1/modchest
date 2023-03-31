import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>ModChest</title>
        <meta name="description" content="Newgen modding solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Navbar />

        <h1 className='font-extrabold text-white text-5xl md:text-7xl text-center mt-10 md:mt-20 mb-10'> Modding made simple </h1>
        <h2 className='font-semibold text-white text-2xl text-center '> Welcome to ModChest - revolutionary minecraft mod exploring.</h2>

        <div className='flex justify-center m-10 gap-5 pb-24'>

          <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-1 md:py-4 md:px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
            <Link href='/mods' className='text-white text-2xl p-5'>Mods</Link>
          </button>
          <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-1 md:py-4 md:px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
            <Link href='/modpacks' className='text-white text-2xl p-5'>Modpacks</Link>
          </button>
        </div>

        <Footer />
      </main>
    </>
  )
}
