function Sortby() {
  return (
    <div className="accordion" id="accordionExample5">
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingTwo5">
          <button
            className="accordion-button relative flex items-center w-[14.5rem] py-4 px-5 text-base text-left bg-white border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo5"
            aria-expanded="false"
            aria-controls="collapseTwo5"
          >
            SortBy
          </button>
        </h2>
        <div
          id="collapseTwo5"
          className="accordion-collapse collapse show"
          aria-labelledby="headingTwo5"
        >
          <div className="accordion-body py-4 px-5 flex items-start justify-start">
            <div className="text-base">
              <select id="" className="px-6 py-2">
                <option
                  class="dropdown-item text-base pt-2 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  hidden
                >
                  Order
                </option>
                <option class="dropdown-item text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                  Low->High
                </option>
                <option class="dropdown-item text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                  High->Low
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sortby;
