import React from 'react'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";


const Pagination = ({ currentPage, totalPages, handlePageClick, handleNextPage, handlePreviousPage, handleFirstPage, handleLastPage }) => {
  return (
    <div className="block sm:hidden flex items-center gap-4 justify-center mt-4 ">
      <button
        onClick={handleFirstPage} disabled={currentPage === 1}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>

      </button>

      <div className="flex items-center">
        <MdKeyboardDoubleArrowLeft onClick={handlePreviousPage} disabled={currentPage === 1} className="text-gray-900 text-4xl transition-all duration-200 ease-in-out p-2 rounded-full hover:bg-gray-300" />
      </div>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all ${currentPage === index + 1 ? 'bg-[#0cc9e8] text-white' : ' text-gray-800'} hover:bg-[#0ccbe89b] active:bg-[#0ccbe8d0] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">{index + 1}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center">
        <MdKeyboardDoubleArrowRight onClick={handleNextPage} disabled={currentPage === totalPages} className="text-gray-900 text-4xl transition-all duration-200 ease-in-out p-2 rounded-full hover:bg-gray-300" />
      </div>
      <button
        onClick={handleLastPage} disabled={currentPage === totalPages}
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          aria-hidden="true" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
