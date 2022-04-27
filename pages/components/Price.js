function Price() {
  return (
    <div className="accordion" id="accordionExample5">
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingOne5">
          <button
            className="accordion-button relative flex items-center w-56 py-4 px-5 text-base text-left bg-white border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne5"
            aria-expanded="false"
            aria-controls="collapseOne5"
          >
            Price
          </button>
        </h2>
        <div
          id="collapseOne5"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne5"
        >
          <div className="accordion-body py-4 px-5 flex flex-col items-start justify-start">
            <label className="text-base px-3 pb-2">Price</label>
            <div className="flex flex-row items-center justify-start pb-2">
              <div className="text-xs">
                <select id="" className="px-4 py-2">
                  <option class="dropdown-item text-base pt-2 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                    NONE
                  </option>
                  <option class="dropdown-item text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                    >10
                  </option>
                  <option class="dropdown-item text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                    >100
                  </option>
                  <option class="dropdown-item text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                    >1000
                  </option>
                </select>
              </div>
              <div className="text-xs px-3">
                <select id="" name="type" className="px-4 py-2">
                  <option value="none" hidden></option>
                  <option class="dropdown-item text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                    ETH
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
