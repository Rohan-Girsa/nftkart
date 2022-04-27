function Homeitemthree() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-start px-5 sm:px-[12.5%] pb-7 sm:pb-16">
        <div className="flex flex-col items-center justify-center cursor-pointer py-3 sm:px-3">
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
                0.0023 ETH
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
              className="rounded-t-lg w-80 h-80 sm:w-96 sm:h-80"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-80 sm:w-96 h-32 sm:h-12 bg-[rgb(53,53,53)] rounded-b-lg">
            <div className="flex items-center justify-center border-b-2 sm:border-0 w-72">
              <h1 className="text-white text-xl sm:text-sm pb-1 sm:pb-0">
                Iron
              </h1>
            </div>
            <div>
              <h1 className="text-white text-sm flex sm:hidden">
                Man in Power
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer py-2 sm:px-2">
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
                0.00021 ETH
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
              src="/eye.png"
              alt="eye"
              className="rounded-t-lg w-80 h-80 sm:w-96 sm:h-80"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-80 sm:w-96 h-32 sm:h-12 bg-[rgb(53,53,53)] rounded-b-lg">
            <div className="flex items-center justify-center border-b-2 sm:border-0 w-72">
              <h1 className="text-white text-xl sm:text-sm pb-1 sm:pb-0">
                Eye nft
              </h1>
            </div>
            <div>
              <h1 className="text-white text-sm flex sm:hidden">
                eye collection
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeitemthree;
