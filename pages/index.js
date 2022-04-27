import Head from "next/head";
import Homepage from "./components/Homepage";

// import "tw-elements";

export default function Home() {
  return (
    <div>
      <Head>
        <title>https://nftkart.queppelinsolutions.com/</title>
        <link
          rel="icon"
          href="https://nftkart.queppelinsolutions.com/favicon.png"
        />
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
      </Head>
      <Homepage />
    </div>
  );
}
