function Storeitemthree() {
  return (
    <div id="auction">
      <section className="flex flex-col sm:flex-row items-center justify-start pb-5 sm:pb-52">
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
              className="rounded-t-lg w-[14rem] h-80 sm:w-[21rem]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[14rem] sm:w-[21rem] h-32 sm:h-12 bg-[rgb(53,53,53)] rounded-b-lg">
            <div className="flex items-center justify-center border-b-2 sm:border-0 w-[10rem]">
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
              className="rounded-t-lg w-[14rem] h-80 sm:w-[21rem]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[14rem] sm:w-[21rem] h-32 sm:h-12 bg-[rgb(53,53,53)] rounded-b-lg">
            <div className="flex items-center justify-center border-b-2 sm:border-0 w-[10rem]">
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
      <div className="flex justify-center pb-20">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item">
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 hover:bg-gray-300"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-gray-200 outline-none transition-all duration-300 hover:bg-gray-300"
                href="#"
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 hover:bg-gray-300"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Storeitemthree;
