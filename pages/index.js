import Head from 'next/head'
import Typing from '../components/Typing/Typing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan's Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typing></Typing>
      </main>
    </div>
  )
}
