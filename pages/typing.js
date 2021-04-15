import Head from "next/head";
import { useState } from "react";
import PageHeader from "../components/PageHeader/Index";
import Typing from "../components/Typing/Index";
import { BackgroundOverwrite } from "../styles/BackgroundOverwrite";

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
        <PageHeader />
        <main>
          <Typing newQuote={quote} fetchData={refreshQuote}></Typing>
        </main>
      </BackgroundOverwrite>
    </div>
  );
}
