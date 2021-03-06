import Head from 'next/head'
import Header from '../components/Header'

import Typing from '../components/Typing/Typing'

export default function TypingPage() {
  return (
    <div>
      <Head>
        <title>Ryan's Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header></Header>
      <main>
        <Typing></Typing>
      </main>
    </div>
  )
}
