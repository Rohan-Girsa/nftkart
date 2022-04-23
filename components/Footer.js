import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

function Footer() {
  return (
    <div className="relative w-full">
      <div className="flex w-full h-auto justify-center items-center bg-gradient-to-t from-[rgb(36,36,36)] to-[rgb(62,62,62)]">
        <div className="flex flex-col items-center justify-center pt-6 sm:pt-12">
          <img
            src="https://nftkart.queppelinsolutions.com/queppelin.png"
            alt="logo"
            className="cursor-pointer pb-4 sm:pb-8"
          />
          <div className="flex items-center justify-center w-[100vw] sm:w-[60vw] h-56 sm:rounded-t-[2.5rem] bg-gradient-to-b from-[rgb(161,75,170)] to-[rgb(243,85,85)] via-[rgb(161,75,170)]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white text-lg sm:text-2xl">
                We have been developing products for our
              </h1>
              <h1 className="text-white text-lg sm:text-2xl">
                clients for over 11 years now.
              </h1>
              <div className="flex flex-row items-center justify-center pt-3 sm:py-9">
                <div className="px-5 sm:px-3 cursor-pointer hover:scale-150">
                  <img
                    src="https://nftkart.queppelinsolutions.com/facebook.png"
                    alt="facebook-logo"
                  />
                </div>
                <div className="px-5 sm:px-3 cursor-pointer hover:scale-150">
                  <img
                    src="https://nftkart.queppelinsolutions.com/insta.png"
                    alt="instagram-logo"
                  />
                </div>
                <div className="px-5 sm:px-3 cursor-pointer hover:scale-150">
                  <img
                    src="https://nftkart.queppelinsolutions.com/linkedin.png"
                    alt="linkedin-logo"
                  />
                </div>
                <div className="px-5 sm:px-3 cursor-pointer hover:scale-150">
                  <img
                    src="https://nftkart.queppelinsolutions.com/youtube.png"
                    alt="youtube-logo"
                  />
                </div>
                <div className="flex items-center justify-center px-5 sm:px-3 cursor-pointer hover:scale-150">
                  <div className="hover:flex hover:text-xs">
                    <SupervisorAccountIcon className="invert" />
                    <h1 className="hidden text-sm text-white">Supervisor</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pt-8 pb-4 sm:pb-0">
            <div className="flex flex-row">
              <h1 className="text-white text-base pr-6">Phone</h1>
              <h1 className="text-white text-base">-</h1>
              <h1 className="text-white text-base pl-6">+1 0000000</h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-white text-base pr-9">Chat</h1>
              <h1 className="text-white text-base">-</h1>
              <h1 className="text-white text-base pl-6">Monday to Friday</h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-white text-base pr-4">Timings</h1>
              <h1 className="text-white text-base">-</h1>
              <h1 className="text-white text-base pl-6">10am to 7pm</h1>
            </div>
          </div>
          <div className=" flex border-t-2 w-[85vw] pb-3 sm:hidden">
            <div className="flex items-center justify-center pt-2">
              <div className="text-white text-xs pl-2 pr-6">
                <h1> &#169; Inc. All rights reserved.</h1>
              </div>
              <div className="text-white text-xs flex items-center pl-6 pr-2">
                <h1 className="pr-1">Terms</h1>
                <h1 className="pl-1">Privacy Policy</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
