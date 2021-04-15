import Head from "next/head";
import About from "../components/About/Index";
import Hello from "../components/Greeting/Index";
import PageHeader from "../components/PageHeader/Index";
import Waves from "../components/Waves/Index";
import { BackgroundOverwrite } from "../styles/BackgroundOverwrite";
import {
  BackgroundWhite,
  CentreContent,
  MainWrapper,
  Name,
} from "../styles/global";

export default function Home() {
  return (
    <BackgroundOverwrite>
      <Head>
        <title>Ryan's Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <MainWrapper>
        <CentreContent>
          <Hello />
          <Name>Ryan Harman</Name>
          <h3>
            A Software Developer based in Chester currently working at Bentley
            Motors{" "}
          </h3>
        </CentreContent>
      </MainWrapper>
      <Waves />
      <BackgroundWhite>
        <About />
      </BackgroundWhite>
    </BackgroundOverwrite>
  );
}
