import Head from "next/head";
import About from "../components/About/Index";
import BlobBackground from "../components/Blobs/Index";
import DownArrow from "../components/DownArrow/Index";
import Footer from "../components/Footer/Index";
import Hello from "../components/Greeting/Index";
import PageHeader from "../components/PageHeader/Index";
import {
  BackgroundWhite,
  CentreContent,
  MainWrapper,
  Name,
} from "../styles/global";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan's Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader />
      <MainWrapper>
        <CentreContent>
          <Hello />
          <Name>Ryan Harman</Name>
          <h3>A Software Engineer based in currently working at 🍧 </h3>
        </CentreContent>
        <DownArrow />
        <BlobBackground />
      </MainWrapper>
      <BackgroundWhite>
        <About />
      </BackgroundWhite>
      <Footer />
    </div>
  );
}
