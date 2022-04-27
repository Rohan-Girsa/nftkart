function Homeitemone() {
  return (
    <>
      <section className="flex items-center justify-center px-5 sm:px-[25%] pb-3 sm:pb-14">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <section className="flex flex-col items-center justify-center py-3 sm:px-5 cursor-pointer hover:scale-105 ease-in-out">
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
            <div className="flex flex-col items-center justify-center w-[20rem] sm:w-[19.3rem] h-24 bg-[rgb(61,61,61)] hover:bg-[rgb(66,66,66)] rounded-b-lg">
              <h1 className="text-white text-2xl sm:font-semibold pb-2">
                Snake
              </h1>
              <h1 className="text-white text-sm">A beautiful snake</h1>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center py-3 sm:px-5 cursor-pointer hover:scale-105 ease-in-out">
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
            <div className="flex flex-col items-center justify-center w-[19.4rem] h-24 bg-[rgb(242,92,92)] rounded-b-lg">
              <h1 className="text-white text-2xl sm:font-semibold pb-2">
                Face
              </h1>
              <h1 className="text-white text-sm">Piccasso's art</h1>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center py-3 sm:px-5 cursor-pointer hover:scale-105 ease-in-out">
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
              <h1 className="text-white text-2xl sm:font-semibold pb-2">
                Mother Russia
              </h1>
              <h1 className="text-white text-sm">Russia will prevail</h1>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Homeitemone;
