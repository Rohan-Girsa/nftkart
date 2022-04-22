import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";

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
      <Homepage />
      <Footer />
    </div>
  );
}
