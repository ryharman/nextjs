import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Typing from "../components/Typing/Typing";
import { BackgroundOverwrite } from "../styles/home";

export async function getServerSideProps() {
  const res = await fetch("https://api.quotable.io/random");
  const initialQuote = await res.json();

  return {
    props: { initialQuote },
  };
}

export default function TypingPage({ initialQuote }) {
  const [quote, setQuote] = useState(initialQuote);

  async function refreshQuote() {
    const res = await fetch("https://api.quotable.io/random");
    const quoteToUse = await res.json();

    setQuote(quoteToUse);
  }

  return (
    <div>
      <Head>
        <title>Ryan's Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundOverwrite>
        <Header></Header>
        <main>
          <Typing newQuote={quote} fetchData={refreshQuote}></Typing>
        </main>
      </BackgroundOverwrite>
    </div>
  );
}
