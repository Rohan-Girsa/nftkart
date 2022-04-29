function Homeitemfive() {
  return (
    <>
      <section className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center justify-center px-5 sm:px-[8.5%] md:px-[10%] lg:px-[12.5%] pb-8 sm:pb-12 lg:pb-16">
        <div className="flex flex-col items-center justify-center py-4 sm:px-5">
          <img
            src="https://nftkart.queppelinsolutions.com/wallet.png"
            alt="wallet"
            className="pb-5"
          />
          <div className="flex flex-col items-start justify-start border-b-2 w-64">
            <h1 className="text-base sm:text-xl sm:font-semibold pb-2 sm:pb-3">
              Setup your Wallet
            </h1>
            <h1 className="text-sm">Once you have set up your wallet ,</h1>
            <h1 className="text-sm">
              connect by clicking the wallet icon in the
            </h1>
            <h1 className="text-sm pb-2">top right corner</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-5 sm:px-5">
          <img
            src="https://nftkart.queppelinsolutions.com/nfts.png"
            alt="nft"
            className="pb-5"
          />
          <div className="flex flex-col items-start justify-start border-b-2 w-64">
            <h1 className="text-base sm:text-xl sm:font-semibold pb-2 sm:pb-3">
              Find Artpiece
            </h1>
            <h1 className="text-sm">
              Search for you desired Artpiece you like
            </h1>
            <h1 className="text-sm pb-2">...</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-5 sm:px-5">
          <img
            src="https://nftkart.queppelinsolutions.com/find.png"
            alt="find"
            className="pb-5"
          />
          <div className="flex flex-col items-start justify-start border-b-2 w-64">
            <h1 className="text-base sm:text-xl sm:font-semibold pb-2 sm:pb-3">
              Buy NFTs
            </h1>
            <h1 className="text-sm">Buy NFT and add to your collection of</h1>
            <h1 className="text-sm pb-2">artworks ...</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-5 sm:px-5">
          <img
            src="https://nftkart.queppelinsolutions.com/follow.png"
            alt="follow"
            className="pb-5"
          />
          <div className="flex flex-col items-start justify-start border-b-2 w-64">
            <h1 className="text-base sm:text-xl sm:font-semibold pb-2 sm:pb-3">
              Follow Us
            </h1>
            <h1 className="text-sm pb-2">
              Follow us on our Social Media Handles!
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeitemfive;
