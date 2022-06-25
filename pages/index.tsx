import Head from "next/head";
import { FC } from "react";
import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
const Home: FC = () => {
  return (
    <div>
      <Head>
        <title> care technical test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* PAGE LAYOUT & COMPONENTS. CHECK COMPONENTS FOLDER TO SEE HOW COMPONENTS ARE CODED */}

      {/* COMPONENT-1 : NAVBAR COMPONENT */}
      <div className=" flex flex-col">
        <div>
          <Navbar />
        </div>
        {/* COMPONENT-2: CARD COMPONENT */}
        <div className="h-screen flex justify-center items-center ">
          {/* card component */}
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Home;
