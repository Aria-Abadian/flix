import React, { useState } from "react";
import { animations, comedy, kDrama } from "../data/TrendingData";

const AllMovies = () => {
  const allVideos = [...comedy, ...animations, ...kDrama];
  const itemsPerPage = 15;
  
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(allVideos.length / itemsPerPage);

  // Get the current items to be displayed on the page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allVideos.slice(startIndex, startIndex + itemsPerPage);

  // Function to go to the next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative z-10 pt-[18vw] md:pt-[10vw] flex flex-col items-center gap-[5vw]">
      <div className="bg-slate-900/80 backdrop-blur-3xl h-[10vw] w-[80vw] rounded-[2vw] shadow-2xl">
        <h4>Filters:</h4>
      </div>
      <div className="grid grid-cols-5 gap-[2vw] border border-red-600 pl-[3vw]">
        {currentItems.map((item, index) => (
          <div className="flex flex-col items-start border border-red-600" key={index}>
            <div className="object-cover h-[70vw] w-[50vw] md:h-[21vw] md:w-[15vw] cursor-pointer overflow-hidden rounded-[2vw]">
              <img src={item.image} alt={item.title} />
            </div>
            <div>
              <h2 className="text-white text-[1.5vw] font-semibold">{item.title}</h2>
              <div className="flex flex-row items-center gap-[2vw] text-white font-semibold">
                <p>⭐{item.rate}</p>
                <p>|</p>
                <p>{item.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between w-[80vw] text-white mb-[5vw]">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-slate-500 hover:bg-slate-700"}`}
        >
          Previous
        </button>
        <p className="font-semibold">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "bg-slate-500 hover:bg-slate-700"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllMovies;
