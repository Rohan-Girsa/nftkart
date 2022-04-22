function Homepage() {
  return (
    <div className="pt-12">
      <section className="relative w-full h-full">
        <img
          src="https://nftkart.queppelinsolutions.com/NFT.png"
          alt="banner-image"
          className="w-full h-auto"
        />
        <div className="flex flex-col items-start justify-center absolute top-[20%] left-[15%]">
          <div className="flex flex-row items-center justify-center text-white text-base font-semibold pb-8">
            <h1>Powered by </h1>
            <h1 className="hover:text-[rgb(213,98,225)] cursor-pointer pl-1 pr-1">
              Queppelin
            </h1>
            <sup>&#169;</sup>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-row items-center justify-center pb-8">
              <h1 className="text-[rgb(213,98,225)] font-semibold text-6xl pr-4">
                Discover
              </h1>
              <h1 className="text-6xl font-semibold text-white">
                rare digital art
              </h1>
            </div>
            <div className="flex items-center justify-center text-6xl font-semibold text-white">
              <h1>and collect NFTs ․․․</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-start items-start pb-14 pt-20 pl-[18%]">
        <h1 className="text-5xl pb-6 font-bold">Popular NFTs</h1>
      </div>
      <section className="flex items-center justify-center px-[25%] pb-14">
        <div className="flex flex-row items-center justify-center">
          <section className="flex flex-col items-center justify-center px-5 cursor-pointer hover:scale-105 ease-in-out">
            <div className="flex flex-col items-end justify-start relative">
              <div className="absolute pt-5 pr-3">
                <button
                  type="button"
                  className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-base font-semibold rounded-lg flex items-center"
                >
                  <img
                    src="https://nftkart.queppelinsolutions.com/ether.png"
                    alt="ether"
                    className="w-6 h-6"
                  />
                  0.001 ETH
                </button>
              </div>
              <img
                src="https://nftkart.queppelinsolutions.com/girl.png"
                alt="girl"
                className="rounded-t-lg w-80 h-[21rem]"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-[19.3rem] h-24 bg-[rgb(61,61,61)] hover:bg-[rgb(66,66,66)] rounded-b-lg">
              <h1 className="text-white text-2xl font-semibold pb-2">Snake</h1>
              <h1 className="text-white text-sm">A beautiful snake</h1>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center px-5 cursor-pointer hover:scale-105 ease-in-out">
            <div className="flex flex-col items-end justify-start relative">
              <div className="absolute pt-5 pr-3">
                <button
                  type="button"
                  className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-base font-semibold rounded-lg flex items-center"
                >
                  <img
                    src="https://nftkart.queppelinsolutions.com/ether.png"
                    alt="ether"
                    className="w-6 h-6"
                  />
                  0.003 ETH
                </button>
              </div>
              <img
                src="https://nftkart.queppelinsolutions.com/face.png"
                alt="face"
                className="rounded-t-lg"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-[19.3rem] h-24 bg-[rgb(242,92,92)] rounded-b-lg">
              <h1 className="text-white text-2xl font-semibold pb-2">Face</h1>
              <h1 className="text-white text-sm">Piccasso's art</h1>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center px-5 cursor-pointer hover:scale-105 ease-in-out">
            <div className="flex flex-col items-end justify-start relative">
              <div className="absolute pt-5 pr-3">
                <button
                  type="button"
                  className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-base font-semibold rounded-lg flex items-center"
                >
                  <img
                    src="https://nftkart.queppelinsolutions.com/ether.png"
                    alt="ether"
                    className="w-6 h-6"
                  />
                  0.005 ETH
                </button>
              </div>
              <img
                src="https://nftkart.queppelinsolutions.com/russia.png"
                alt="russia"
                className="rounded-t-lg"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-[19.3rem] h-24 bg-[rgb(61,61,61)] hover:bg-[rgb(59,59,59)] rounded-b-lg">
              <h1 className="text-white text-2xl font-semibold pb-2">
                Mother Russia
              </h1>
              <h1 className="text-white text-sm">Russia will prevail</h1>
            </div>
          </section>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center pb-14">
        <h1 className="text-6xl pb-3 font-bold">Best</h1>
        <h1 className="text-5xl font-semibold">Place to Collect NFTs</h1>
      </div>
      <section className="pb-14 relative">
        <img
          src="https://nftkart.queppelinsolutions.com/bone.png"
          alt="bone"
          className="w-full h-[28rem]"
        />
        <div className="flex flex-col items-start justify-center absolute top-[15%] left-[20%]">
          <h1 className="text-[rgb(213,98,225)] font-semibold text-4xl pb-4">
            Smiling Bone
          </h1>
          <div className="text-[rgb(211,211,211)] text-base">
            <h1>NFT market smart contract which is</h1>
            <h1>used by multiple websites to provide</h1>
            <h1>the users the best possible</h1>
            <h1>experience.</h1>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center pb-14">
        <h1 className="text-5xl font-semibold">
          Discover and collect, extraordinary
          <br />
          NFTs
        </h1>
      </div>
      <section className="flex flex-col items-center justify-center px-[12.5%] pb-20">
        <div className="flex items-center justify-center pb-3">
          <div className="flex flex-col items-center justify-center cursor-pointer px-3">
            <div className="flex flex-col items-end justify-start relative">
              <div className="absolute pt-5 pr-3">
                <button
                  type="button"
                  className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-sm font-semibold rounded-lg flex items-center"
                >
                  <img
                    src="https://nftkart.queppelinsolutions.com/ether.png"
                    alt="ether"
                    className="w-6 h-6"
                  />
                  0.001ETH
                </button>
              </div>
              <img
                src="/nature.png"
                alt="nature"
                className="rounded-t-lg w-96 h-80"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-96 h-12 bg-[rgb(53,53,53)] rounded-b-lg">
              <h1 className="text-white text-sm">Nature</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer px-2">
            <div className="flex flex-col items-end justify-start relative">
              <div className="absolute pt-5 pr-3">
                <button
                  type="button"
                  className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-sm font-semibold rounded-lg flex items-center"
                >
                  <img
                    src="https://nftkart.queppelinsolutions.com/ether.png"
                    alt="ether"
                    className="w-6 h-6"
                  />
                  1.0ETH
                </button>
              </div>
              <img
                src="/jail.jfif"
                alt="jail"
                className="rounded-t-lg w-96 h-80"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-96 h-12 bg-[rgb(53,53,53)] rounded-b-lg">
              <h1 className="text-white text-sm">Jail</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer px-2">
            <div className="flex flex-col items-end justify-start relative">
              <div className="absolute pt-5 pr-3">
                <button
                  type="button"
                  className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-sm font-semibold rounded-lg flex items-center"
                >
                  <img
                    src="https://nftkart.queppelinsolutions.com/ether.png"
                    alt="ether"
                    className="w-6 h-6"
                  />
                  1.2ETH
                </button>
              </div>
              <img
                src="/punk.jfif"
                alt="punk"
                className="rounded-t-lg w-96 h-80"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-96 h-12 bg-[rgb(53,53,53)] rounded-b-lg">
              <h1 className="text-white text-sm">Punk</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-3">
          <div className="flex flex-col items-center justify-center cursor-pointer px-3">
            <div className="flex flex-col items-end justify-start relative">
              <div className="absolute pt-5 pr-3">
                <button
                  type="button"
                  className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-sm font-semibold rounded-lg flex items-center"
                >
                  <img
                    src="https://nftkart.queppelinsolutions.com/ether.png"
                    alt="ether"
                    className="w-6 h-6"
                  />
                  0.1ETH
                </button>
              </div>
              <img
                src="/redface.jfif"
                alt="redface"
                className="rounded-t-lg w-96 h-80"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-96 h-12 bg-[rgb(53,53,53)] rounded-b-lg">
              <h1 className="text-white text-sm">Red Face</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer px-2">
            <div className="flex flex-col items-end justify-start relative">
              <div className="absolute pt-5 pr-3">
                <button
                  type="button"
                  className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-sm font-semibold rounded-lg flex items-center"
                >
                  <img
                    src="https://nftkart.queppelinsolutions.com/ether.png"
                    alt="ether"
                    className="w-6 h-6"
                  />
                  0.23ETH
                </button>
              </div>
              <img
                src="/fight.jfif"
                alt="fight"
                className="rounded-t-lg w-96 h-80"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-96 h-12 bg-[rgb(53,53,53)] rounded-b-lg">
              <h1 className="text-white text-sm">Fight</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer px-2">
            <div className="flex flex-col items-end justify-start relative">
              <div className="absolute pt-5 pr-3">
                <button
                  type="button"
                  className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-sm font-semibold rounded-lg flex items-center"
                >
                  <img
                    src="https://nftkart.queppelinsolutions.com/ether.png"
                    alt="ether"
                    className="w-6 h-6"
                  />
                  0.3ETH
                </button>
              </div>
              <img
                src="/road.jfif"
                alt="road"
                className="rounded-t-lg w-96 h-80"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-96 h-12 bg-[rgb(53,53,53)] rounded-b-lg">
              <h1 className="text-white text-sm">Road</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center pb-14">
        <h1 className="text-5xl font-semibold">NFTs on Auction</h1>
      </div>
      <section className="flex items-center justify-start px-[12.5%] pb-20">
        <div className="flex flex-col items-center justify-center cursor-pointer px-3">
          <div className="flex flex-col items-end justify-start relative">
            <div className="absolute pt-5 pr-3">
              <button
                type="button"
                className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-sm font-semibold rounded-lg flex items-center"
              >
                <img
                  src="https://nftkart.queppelinsolutions.com/ether.png"
                  alt="ether"
                  className="w-6 h-6"
                />
                0.0023ETH
              </button>
            </div>
            <div className="absolute pt-64 pr-3">
              <button
                type="button"
                className="px-2 pt-1.5 pb-1.5 text-white bg-[rgb(161,75,170)] text-sm font-semibold rounded-lg flex items-center"
              >
                PLACE BID
              </button>
            </div>
            <img
              src="/iron.jfif"
              alt="iron"
              className="rounded-t-lg w-96 h-80"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-96 h-12 bg-[rgb(53,53,53)] rounded-b-lg">
            <h1 className="text-white text-sm">Iron</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer px-2">
          <div className="flex flex-col items-end justify-start relative">
            <div className="absolute pt-5 pr-3">
              <button
                type="button"
                className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-sm font-semibold rounded-lg flex items-center"
              >
                <img
                  src="https://nftkart.queppelinsolutions.com/ether.png"
                  alt="ether"
                  className="w-6 h-6"
                />
                0.00021ETH
              </button>
            </div>
            <div className="absolute pt-64 pr-3">
              <button
                type="button"
                className="px-2 pt-1.5 pb-1.5 text-white bg-[rgb(161,75,170)] text-sm font-semibold rounded-lg flex items-center"
              >
                PLACE BID
              </button>
            </div>
            <img src="/eye.png" alt="eye" className="rounded-t-lg w-96 h-80" />
          </div>
          <div className="flex flex-col items-center justify-center w-96 h-12 bg-[rgb(53,53,53)] rounded-b-lg">
            <h1 className="text-white text-sm">Eye nft</h1>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center pb-28">
        <h1 className="text-5xl font-semibold">Top Users</h1>
      </div>
      <section className="flex items-center justify-center px-[12.5%]">
        <div className="flex items-center justify-center px-28">
          <div className="flex flex-col items-center justify-center absolute">
            <div className="relative top-7">
              <img
                src="/test.jfif"
                className="rounded-full w-16 h-16"
                alt="test"
              />
            </div>
            <div className="flex items-center justify-center bg-[rgb(228,227,227)] text-sm w-48 h-20 rounded-l-full rounded-r-full">
              <h1>@test21</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-28">
          <div className="flex flex-col items-center justify-center absolute">
            <div className="relative top-7">
              <img
                src="/dev.png"
                className="rounded-full w-16 h-16"
                alt="dev"
              />
            </div>
            <div className="flex items-center justify-center bg-[rgb(228,227,227)] text-sm w-48 h-20 rounded-l-full rounded-r-full">
              <h1>@Dev</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-28">
          <div className="flex flex-col items-center justify-center absolute">
            <div className="relative top-7">
              <img
                src="/neilk.jfif"
                className="rounded-full w-16 h-16"
                alt="neilk"
              />
            </div>
            <div className="flex items-center justify-center bg-[rgb(228,227,227)] text-sm w-48 h-20 rounded-l-full rounded-r-full">
              <h1>@neilk17</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-28">
          <div className="flex flex-col items-center justify-center absolute">
            <div className="relative top-7">
              <img
                src="/dog.jfif"
                className="rounded-full w-16 h-16"
                alt="buyer23"
              />
            </div>
            <div className="flex items-center justify-center bg-[rgb(228,227,227)] text-sm w-48 h-20 rounded-l-full rounded-r-full">
              <h1>@buyer23</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-28">
          <div className="flex flex-col items-center justify-center absolute">
            <div className="relative top-7">
              <img
                src="/dog.jfif"
                className="rounded-full w-16 h-16"
                alt="rjDev"
              />
            </div>
            <div className="flex items-center justify-center bg-[rgb(228,227,227)] text-sm w-48 h-20 rounded-l-full rounded-r-full">
              <h1>@rjDev</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-28">
          <div className="flex flex-col items-center justify-center absolute">
            <div className="relative top-7">
              <img
                src="/bulb.png"
                className="rounded-full w-16 h-16"
                alt="rj83"
              />
            </div>
            <div className="flex items-center justify-center bg-[rgb(228,227,227)] text-sm w-48 h-20 rounded-l-full rounded-r-full">
              <h1>@rj83</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center pt-28 pb-16">
        <h1 className="text-4xl font-semibold">How it works!</h1>
      </div>
      <section className="flex items-center justify-center px-[12.5%] pb-16">
        <div className="flex flex-col items-center justify-center px-5">
          <img
            src="https://nftkart.queppelinsolutions.com/wallet.png"
            alt="wallet"
            className="pb-5"
          />
          <div className="flex flex-col items-start justify-start border-b-2 w-64">
            <h1 className="text-xl font-semibold pb-3">Setup your Wallet</h1>
            <h1 className="text-sm">Once you have set up your wallet ,</h1>
            <h1 className="text-sm">
              connect by clicking the wallet icon in the
            </h1>
            <h1 className="text-sm pb-2">top right corner</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-5">
          <img
            src="https://nftkart.queppelinsolutions.com/nfts.png"
            alt="nft"
            className="pb-5"
          />
          <div className="flex flex-col items-start justify-start border-b-2 w-64">
            <h1 className="text-xl font-semibold pb-3">Find Artpiece</h1>
            <h1 className="text-sm">
              Search for you desired Artpiece you like
            </h1>
            <h1 className="text-sm pb-2">...</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-5">
          <img
            src="https://nftkart.queppelinsolutions.com/find.png"
            alt="find"
            className="pb-5"
          />
          <div className="flex flex-col items-start justify-start border-b-2 w-64">
            <h1 className="text-xl font-semibold pb-3">Buy NFTs</h1>
            <h1 className="text-sm">Buy NFT and add to your collection of</h1>
            <h1 className="text-sm pb-2">artworks ...</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-5">
          <img
            src="https://nftkart.queppelinsolutions.com/follow.png"
            alt="follow"
            className="pb-5"
          />
          <div className="flex flex-col items-start justify-start border-b-2 w-64">
            <h1 className="text-xl font-semibold pb-3">Follow Us</h1>
            <h1 className="text-sm pb-2">
              Follow us on our Social Media Handles!
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
