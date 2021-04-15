import Head from "next/head";
import Hello from "../components/Greeting/Index";
import PageHeader from "../components/PageHeader/Index";
import Waves from "../components/Waves/Index";
import {
  BackgroundOverwrite,
  MainWrapper,
  Name,
} from "../components/Styled/Global";

export default function Home() {
  return (
    <BackgroundOverwrite>
      <Head>
        <title>Ryan's Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <MainWrapper>
        <Hello />
        <Name>Ryan Harman</Name>
        <h3>
          A Software Developer based in Chester currently working at Bentley
          Motors{" "}
        </h3>
      </MainWrapper>
      <Waves />
    </BackgroundOverwrite>
  );
}
