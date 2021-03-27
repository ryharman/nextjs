import Head from "next/head";
import About from "../components/About";
import Hello from "../components/Greeting/Index";
import Header from "../components/Header/Index";
import Waves from "../components/Waves";
import { BackgroundOverwrite, MainWrapper, Name } from "../styles/home";

export default function Home() {
  return (
    <div>
      <BackgroundOverwrite>
        <Head>
          <title>Ryan's Next.js App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <MainWrapper>
          <Hello />
          <Name>Ryan Harman</Name>
          <h3>
            A Software Developer based in Chester currently working at Bentley
            Motors{" "}
          </h3>
        </MainWrapper>
        <About />
      </BackgroundOverwrite>
      <Waves />
    </div>
  );
}
