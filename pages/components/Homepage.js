import Card from "../shared/Card";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Homeitemfive from "./Homeitemfive";
import Homeitemfour from "./Homeitemfour";
import Homeitemone from "./Homeitemone";
import Homeitemthree from "./Homeitemthree";
import Homeitemtwo from "./Homeitemtwo";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="pt-12">
        <section className="relative w-full h-full">
          <img
            src="/NFT.png"
            alt="banner-image"
            className="w-full h-72 sm:h-[32rem]"
          />
          <div className="flex flex-col items-start justify-center absolute top-[30%] left-[20%] sm:top-[20%] sm:left-[15%]">
            <div
              id="t1"
              className="flex flex-row items-center justify-center text-white text-xs sm:text-base font-semibold pb-2 sm:pb-8"
            >
              <h1>Powered by </h1>
              <h1 className="hover:text-[rgb(213,98,225)] cursor-pointer pl-1 pr-1">
                Queppelin
              </h1>
              <sup>&#169;</sup>
            </div>
            <div className="flex flex-col items-start justify-center">
              <div
                id="t2"
                className="flex flex-row items-center justify-center pb-2 sm:pb-8"
              >
                <p className="text-[rgb(213,98,225)] font-semibold text-lg sm:text-6xl pr-2 sm:pr-4">
                  Discover
                </p>
                <p className="text-lg sm:text-6xl font-semibold text-white">
                  rare digital art
                </p>
              </div>
              <div
                id="t3"
                className="flex items-center justify-center text-lg sm:text-6xl font-semibold text-white"
              >
                and collect NFTs ․․․
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center sm:justify-start sm:items-start pb-7 sm:pb-14 pt-10 sm:pt-20 sm:pl-[18%]">
          <h1 className="text-3xl sm:text-5xl pb-1 sm:pb-6 font-bold">
            Popular NFTs
          </h1>
        </div>
        <Homeitemone />
        <div className="flex flex-col justify-center items-center pb-3 sm:pb-14">
          <h1 className="text-4xl sm:text-6xl pb-1 sm:pb-3 font-bold">Best</h1>
          <h1 className="text-2xl sm:text-5xl font-semibold">
            Place to Collect NFTs
          </h1>
        </div>
        <section className="pb-3 sm:pb-14 relative">
          <img src="/bone.png" alt="bone" className="w-full h-[28rem]" />
          <div className="flex flex-col items-start justify-center absolute top-[25%] sm:top-[15%] left-[10%] sm:left-[20%]">
            <h1 className="text-[rgb(213,98,225)] font-semibold text-lg sm:text-4xl pb-2 sm:pb-4">
              Smiling Bone
            </h1>
            <div className="text-[rgb(211,211,211)] text-base hidden sm:flex sm:flex-col">
              <h1>NFT market smart contract which is</h1>
              <h1>used by multiple websites to provide</h1>
              <h1>the users the best possible</h1>
              <h1>experience.</h1>
            </div>
            <div className="text-[rgb(211,211,211)] text-sm sm:hidden flex flex-col">
              <h1>NFT</h1>
              <h1>market</h1>
              <h1>best</h1>
              <h1>experience</h1>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center pb-3 sm:pb-14">
          <h1 className="hidden sm:flex text-5xl font-semibold">
            Discover and collect, extraordinary
            <br />
            NFTs
          </h1>
          <h1 className="sm:hidden flex text-2xl font-semibold">
            Discover and <br />
            collect, <br />
            extraordinary
            <br />
            NFTs
          </h1>
        </div>
        <Homeitemtwo />
        <div className="flex justify-center items-center pb-3 sm:pb-14">
          <h1 className="text-2xl sm:text-5xl font-semibold">
            NFTs on Auction
          </h1>
        </div>
        <Homeitemthree />
        <div className="flex justify-center items-center pb-9 sm:pb-16 lg:pb-28">
          <h1 className="text-3xl sm:text-5xl font-semibold">Top Users</h1>
        </div>
        <Homeitemfour />
        <div className="flex justify-center items-center pt-14 sm:pt-28 pb-8 sm:pb-16">
          <h1 className="text-4xl font-semibold">How it works!</h1>
        </div>
        <Homeitemfive />
        <div className="flex w-full h-[15rem] justify-center items-center bg-gradient-to-r from-[rgb(28,29,32)] to-[rgb(103,112,121)]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-base sm:text-[2rem]">
              Enter your Email to join our Newsletter
            </h1>
            <div className="flex items-center justify-center pt-5 sm:pt-10">
              <input
                type="text"
                placeholder="Your email address"
                className="placeholder-white rounded-md w-[12rem] sm:w-[20rem] bg-[rgb(109,109,109)] border-none outline-none text-xs py-2 pl-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <button className="text-white bg-[rgb(161,75,170)] text-xs py-2 px-2 cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
