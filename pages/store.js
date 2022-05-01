import { useState } from "react";
import Price from "./components/Price";
import Sortby from "./components/Sortby";
import Storeitemfour from "./components/Storeitemfour";
import Storeitemthree from "./components/Storeitemthree";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Saledata from "./components/Saledata";
import Card from "./shared/Card";
import Scard from "./shared/Scard";
import Auctiondata from "./components/Auctiondata";
import Page from "./shared/Page";

function store() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchStore, setSearchStore] = useState("");
  const [btnActive, setBtnActive] = useState("sale");
  return (
    <>
      <Navbar />
      {showSidebar ? (
        // open sidebar
        <MenuIcon
          className="cursor-pointer fixed top-16 left-0 sm:left-5 z-30 w-11 h-8 px-1 py-0.5 rounded-md hover:text-white bg-[rgb(147,147,147)]"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      ) : (
        // close sidebar
        <MenuIcon
          className="cursor-pointer fixed z-30 w-11 h-8 px-1 py-0.5 rounded-md hover:text-white bg-[rgb(147,147,147)] left-0 sm:left-[20%] top-[24rem] sm:top-16"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      )}
      <div
        className={`top-12 sm:left-0 w-96 sm:w-[19%] pt-3 pl-5 bg-white fixed h-80 sm:h-full sm:border-r-2 z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-[-600px] " : "translate-x-0"
        }`}
      >
        <h1 className="text-2xl font-normal">Filters</h1>
        <div className="flex flex-col items-start justify-start pb-3">
          <input
            type="text"
            value={searchStore}
            onChange={(e) => {
              setSearchStore(e.target.value);
            }}
            placeholder="Search"
            className="outline-none border-none w-16"
          />
          <SearchIcon className="cursor-pointer" />
        </div>
        <div className="flex items-start justify-start pb-4">
          <button
            id="sale"
            className={`px-9 py-3 text-sm active:bg-gray-300 border rounded-l-md ${
              btnActive === "sale" ? "bg-gray-300" : "hover:bg-gray-100"
            }`}
            onClick={(e) => {
              setBtnActive(e.currentTarget.id);
            }}
          >
            SALE
          </button>
          <button
            id="auction"
            className={`px-6 py-3 text-sm active:bg-gray-300 border rounded-r-md ${
              btnActive === "auction" ? "bg-gray-300" : "hover:bg-gray-100"
            }`}
            onClick={(e) => {
              setBtnActive(e.currentTarget.id);
            }}
          >
            AUCTION
          </button>
        </div>
        <div className="flex flex-col items-start justify-start pb-4">
          {/* Price and Sortby goes here */}
          <div className="pb-4">
            <Price />
          </div>
          <div className="pt-2">
            <Sortby />
          </div>
        </div>
      </div>
      {showSidebar ? (
        <div className="px-5 sm:px-20 pt-14 sm:pt-20 bg-[rgb(250,250,250)]">
          {btnActive === "sale" ? (
            <section className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-4 sm:items-start sm:justify-start pb-5 sm:pb-10">
              {Saledata.map((data, index) => {
                return (
                  <Card
                    key={data.index}
                    bid={data.bid}
                    image={data.img}
                    title={data.title}
                    description={data.description}
                  />
                );
              })}
            </section>
          ) : (
            <section className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 sm:items-start sm:justify-start pb-5 sm:pb-10">
              {Auctiondata.map((data, index) => {
                return (
                  <Card
                    key={data.index}
                    bid={data.bid}
                    image={data.img}
                    title={data.title}
                    description={data.description}
                  />
                );
              })}
            </section>
          )}
          <Page />
        </div>
      ) : (
        <div className="pt-[24rem] sm:pt-20 px-5 sm:pl-[24%] bg-[rgb(250,250,250)]">
          {btnActive === "sale" ? (
            <section className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-4 sm:items-start sm:justify-start pb-5 sm:pb-10">
              {Saledata.map((data, index) => {
                return (
                  <Scard
                    key={data.index}
                    bid={data.bid}
                    image={data.img}
                    title={data.title}
                    description={data.description}
                  />
                );
              })}
            </section>
          ) : (
            <section className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 sm:items-start sm:justify-start pb-5 sm:pb-10">
              {Auctiondata.map((data, index) => {
                return (
                  <Scard
                    key={data.index}
                    bid={data.bid}
                    image={data.img}
                    title={data.title}
                    description={data.description}
                  />
                );
              })}
            </section>
          )}
          <Page />
        </div>
      )}
      <Footer />
    </>
  );
}

export default store;
