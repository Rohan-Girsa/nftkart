import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>https://nftkart.queppelinsolutions.com/</title>
        <link
          rel="icon"
          href="https://nftkart.queppelinsolutions.com/favicon.png"
        />
      </Head>
      <Navbar />
    </div>
  );
}
