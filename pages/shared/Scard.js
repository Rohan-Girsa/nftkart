import React from "react";

function Scard(data) {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer py-3 sm:px-3">
      <div className="flex flex-col items-end justify-start relative">
        <div className="absolute pt-5 pr-3">
          <button
            type="button"
            className="px-2 pt-1.5 pb-1.5 bg-[rgb(229,228,228)] text-sm font-semibold rounded-lg flex items-center"
          >
            <img src="/ether.png" alt="ether" className="w-6 h-6" />
            {data.bid}
          </button>
        </div>
        <img
          src={data.image}
          alt=""
          className="rounded-t-lg w-[14rem] h-80 sm:w-[16.5rem]"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-[14rem] sm:w-[16.5rem] h-32 sm:h-12 bg-[rgb(53,53,53)] rounded-b-lg">
        <div className="flex items-center justify-center border-b-2 sm:border-0 w-[10rem]">
          <h1 className="text-white text-xl sm:text-sm pb-1 sm:pb-0">
            {data.title}
          </h1>
        </div>
        <div>
          <h1 className="text-white text-sm flex sm:hidden">
            {data.description}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Scard;
