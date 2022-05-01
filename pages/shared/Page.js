function Page() {
  return (
    <div className="flex justify-center pb-10 sm:pb-20">
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
  );
}

export default Page;
