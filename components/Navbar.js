import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <div>
      <nav className="fixed w-full z-10 bg-gradient-to-t from-[rgb(36,36,36)] to-[rgb(61,61,61)]">
        <div className="w-full">
          <div className="flex items-center w-full h-12 justify-between">
            <div className="flex justify-center items-center cursor-pointer">
              <img
                src="https://nftkart.queppelinsolutions.com/queppelin.png"
                alt="logo"
                className="w-24"
              />
            </div>
            <div className="flex justify-center items-center cursor-pointer text-[rgb(193,193,193)] px-2">
              <div className="px-12 hover:text-white text-xs list-none">
                <li className={router.pathname === "/" ? "active" : ""}>
                  <Link href="/">HOME</Link>
                </li>
              </div>
              <div className="px-12 hover:text-white text-xs list-none">
                <li className={router.pathname === "/store" ? "active" : ""}>
                  <Link href="/store">STORE</Link>
                </li>
              </div>
              <div className="px-12 hover:text-white text-xs list-none">
                <li className={router.pathname === "/faqs" ? "active" : ""}>
                  <Link href="/faqs">FAQS!</Link>
                </li>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="px-7">
                <div className="rounded-full w-10">
                  <img
                    src="/login.png"
                    alt="login"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-7">
                <div className=" bg-[rgb(161,75,170)] rounded-full p-2">
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
