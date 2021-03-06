import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan's Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <main>
        <LinkWrapper>
          <Link href='/typing'>
            <a>Go To: Typing Challenge</a>
          </Link>
          <p> 
            - Styled Components<br/>
            - useEffect & useState<br/>
            - async Fetch
          </p>
        </LinkWrapper>
      </main>
    </div>
  )
}

const LinkWrapper = styled.div`
  margin: 64px;

  & p {
    margin-left: 20px;
  }
`