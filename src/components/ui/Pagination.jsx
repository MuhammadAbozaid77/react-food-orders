import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useSearchParams } from "react-router-dom";
export default function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const pageSize = 10;
  const pagesCount = Math.ceil(count / pageSize);

  const handelNext = () => {
    const nextPage = currentPage === pagesCount ? currentPage : currentPage + 1;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  };
  const handelPrevious = () => {
    const previousPage = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", previousPage);
    setSearchParams(searchParams);
  };

  if (pagesCount <= 1) {
    return null;
  }
  return (
    <div className="flex justify-between items-center">
      <div>
        <span>
          {currentPage === 1 ? 1 : (currentPage - 1) * (pageSize + 1)}
        </span>
        to
        <span> {currentPage * pageSize} </span> from <span> {count} </span>
        results
      </div>
      <div className="flex justify-center items-center gap-5">
        <PaginationButton
          onClick={() => handelPrevious()}
          disabled={currentPage == 1}
        >
          <GoChevronLeft size={20} />
          <span className="text-[16px] font-bold text-gray-700">Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={() => handelNext()}
          disabled={currentPage == pagesCount}
        >
          <span className="text-[16px] font-bold text-gray-700"> Next </span>
          <GoChevronRight size={20} />
        </PaginationButton>
      </div>
    </div>
  );
}

function PaginationButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-gray-300 duration-150 p-2 rounded ${
        disabled ? "hover:bg-gray-500 disabled:cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
