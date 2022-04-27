import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <div>
      <nav className="fixed w-full z-10 bg-gradient-to-t from-[rgb(36,36,36)] to-[rgb(62,62,62)]">
        <div className="w-full">
          <div className="flex items-center w-full h-12 justify-between">
            <div className="flex justify-center items-center cursor-pointer">
              <img
                src="https://nftkart.queppelinsolutions.com/queppelin.png"
                alt="logo"
                className="sm:w-24 hidden sm:flex"
              />
              <img
                src="https://nftkart.queppelinsolutions.com/favicon.png"
                alt="logo"
                className="sm:hidden w-8 h-8 rounded-full"
              />
            </div>
            <div className="flex justify-center items-center cursor-pointer text-[rgb(193,193,193)] px-2">
              <div className="text-xs">
                <button
                  className={`relative w-12 sm:w-28 py-4 border-none outline-none ${
                    router.pathname === "/"
                      ? "active text-white after:w-12 after:sm:w-28"
                      : "inactive after:w-12 after:sm:w-28"
                  }`}
                >
                  <Link href="/">HOME</Link>
                </button>
              </div>
              <div className="text-xs">
                <button
                  className={`relative w-12 sm:w-28 py-4 border-none outline-none ${
                    router.pathname === "/store"
                      ? "active text-white after:w-12 after:sm:w-28"
                      : "inactive after:w-12 after:sm:w-28"
                  }`}
                >
                  <Link href="/store">STORE</Link>
                </button>
              </div>
              <div className="text-xs">
                <button
                  className={`relative w-12 sm:w-28 py-4 border-none outline-none ${
                    router.pathname === "/faqs"
                      ? "active text-white after:w-12 after:sm:w-28"
                      : "inactive after:w-12 after:sm:w-28"
                  }`}
                >
                  <Link href="/faqs">FAQS</Link>
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="px-3 sm:px-3">
                <div className="w-8 sm:w-12">
                  <img
                    src="/login.png"
                    alt="login"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="hidden sm:flex sm:px-7">
                <div className="sm:bg-[rgb(161,75,170)] sm:rounded-full sm:p-2">
                  <img
                    src="https://nftkart.queppelinsolutions.com/wallet2.png"
                    alt="wallet"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
